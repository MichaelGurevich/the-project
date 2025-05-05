from fastapi import APIRouter
from packages.backend.db_access.models.UserProfile import UserProfile
from ..jobs.jobs import checkIfValidID

router = APIRouter()

@router.put("/save")
def save_job(job_id: int, user: UserProfile):
    if checkIfValidID(job_id):
        # save job in database
        return "Job saved"
    else:
        return "Job not found"


@router.get("/saved")
def get_saved_jobs(user: UserProfile):
    #reach to db and get all the user's saved jobs
    return {"List of saved jobs" : "jobs"}