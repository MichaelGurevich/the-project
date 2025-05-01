from fastapi import APIRouter
from ..jobs.db_access import checkIfValidID, jobs

router = APIRouter()

@router.get("/login")
def login(name: str, password: str):
    if name is None or password is None:
        return None
    return "logged in"

@router.put("/Save{job_id}")
def save_job(job_id: int, name: str, password: str):
    if checkIfValidID(job_id):
        job = jobs[job_id]
        # save job in database
    else:
        return #error