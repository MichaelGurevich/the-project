from pydantic import BaseModel, EmailStr
from typing import List

class UserProfile(BaseModel):
    username: str
    full_name: str
    email: EmailStr
    password: str # hashed
    favorites: List[str] # list of job id's