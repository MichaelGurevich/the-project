from fastapi import APIRouter
import boto3
import botocore.exceptions as boto_exceptions
from db_access.passwords import hash_password, validate_password

#from db_access.models.UserProfile import UserProfile
#from ...db_access.models.UserProfile import UserProfile
from db_access.models.UserProfile import UserProfile

router = APIRouter()

@router.put("/signup")
def signup(user: UserProfile):
    # TODO: add user saving logic in DB
    return

@router.put("/login")
def login(user: UserProfile):
    dynamodb = boto3.resource('dynamodb')
    user_table = dynamodb.Table('twine-users')

    try:
        # TODO: add a variable somewhere that is the string 'username'
        response = user_table.get_item(Key = {'username' : user.name})
    
    except boto_exceptions.ClientError as err:
        return {"error": f""" Something went wrong while accessing the table.
                  error message: {err.response["Error"]["Message"]}"""}, err.response['Error']['Code']
        
    item = response.get("Item")

<<<<<<< Updated upstream
=======
    if not item:
        # user wasn't found
        return {"error": "User not found"}, 404

    username = item.get("username")  # Safe access
    hashed_password = item.get("username")

    if not username:
        return {"error": "Username missing in DB record"}, 500

    if not hashed_password:
        return {"error": "Password missing in DB record"}, 500

    if(validate_password(user.password, hashed_password)):
        return {}, 200



>>>>>>> Stashed changes
## this page will create a token that will be used everywhere else