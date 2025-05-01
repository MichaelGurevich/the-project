from fastapi import APIRouter
#from db_access.models.UserProfile import UserProfile
#from ...db_access.models.UserProfile import UserProfile
from backend.db_access.models.UserProfile import UserProfile

router = APIRouter()


@router.get("/login")
def login(user: UserProfile):
    #send to db
    return "Success"





## this page will create a token that will be used everywhere else