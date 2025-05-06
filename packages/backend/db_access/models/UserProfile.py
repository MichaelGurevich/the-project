from pydantic import BaseModel, EmailStr
from typing import List

class UserProfile(BaseModel):
    username: str
    full_name: str
    email: EmailStr
    password: str # hashed or not depending on where we got it
    favorites: List[str] = [] # list of job id's