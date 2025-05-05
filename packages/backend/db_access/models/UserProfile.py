from pydantic import BaseModel

class UserProfile(BaseModel):
    user_id: str
    name: str
    password: str