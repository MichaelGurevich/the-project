from fastapi import APIRouter
from packages.backend.db_access.models.UserProfile import UserProfile

router = APIRouter()


@router.put("/login")
def login(user: UserProfile):
    #send to db
    return "Success"


## this page will create a token that will be used everywhere else