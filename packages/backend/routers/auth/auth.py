from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse

from db_access.models.UserProfile import UserProfile
from db_access.TwineDB import UsersDB
from db_access.passwords import hash_password, validate_password

router = APIRouter()

@router.put("/signup")
def signup(user: UserProfile):
    # TODO: add user saving logic in DB
    return

@router.get("/login")
def login(username: str, password: str):
    db = UsersDB()

    success, item = db.get_user(username)
    
    # failed to access db
    if not success:
        raise HTTPException(500, "Failed to access database!")
    # if we got empty data
    if not item:
        # user wasn't found
        raise HTTPException(404, detail= f"User {username} not found in the database.")

    # unpack item into class 
    userData = UserProfile(**item)

    if not userData.password:
        #should never happen
        raise HTTPException(500, detail= f"User {username} does not have password")
    
    if(validate_password(password, hashed = userData.password)):
        return JSONResponse(content = userData.model_dump_json())
    
    raise HTTPException(401, detail= "Incorrect password, please try again!")

## this page will create a token that will be used everywhere else