from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse

from packages.backend.db_access.models.UserProfile import UserProfile
from packages.backend.db_access.TwineDB import UsersDB
from packages.backend.db_access.passwords import hash_password, validate_password

router = APIRouter()

# create global object (THIS SHOULD GO IN MAIN)
#app.state.users_db = UsersDB()

@router.put("/signup")
def signup(user: UserProfile) -> bool:
    # hash password before sending it
    #TODO: probably a good idea to hash on the Front side to not send actual passwords
    # but maybe Im wrong.
    users_db = UsersDB() #DEBUG

    access, item = users_db.get_user(user.username)
    
    # failed to access db
    if not access:
        raise HTTPException(500, "Failed to access database!")
    # if we got empty data
    if item:
        # user was found in database
        raise HTTPException(401, detail= f"User {user.username} already in database.")

    user.password = hash_password(user.password)
    return (users_db.save_user(user))


@router.get("/login", response_model = UserProfile)
def login(username: str, password: str) -> UserProfile:
    users_db = UsersDB() # DEBUG
    access, item = users_db.get_user(username)
    
    # failed to access db
    if not access:
        raise HTTPException(500, "Failed to access database!")
    # if we got empty data
    if not item:
        # user wasn't found
        raise HTTPException(404, detail= f"User {username} not found in the database.")

    # unpack item into class 
    user: UserProfile = UserProfile(**item)

    if not user.password:
        #should never happen
        raise HTTPException(500, detail= f"User {username} does not have password")
    
    if(validate_password(password, hashed = user.password)):
        return user
    
    raise HTTPException(401, detail= "Incorrect password, please try again!")

## this page will create a token that will be used everywhere else