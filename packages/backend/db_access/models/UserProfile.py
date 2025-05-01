from pydantic import BaseModel

class UserProfile(BaseModel):
    name: str
    password: str