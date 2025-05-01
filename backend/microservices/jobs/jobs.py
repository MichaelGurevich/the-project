from fastapi import APIRouter
from db-access import get_jobs

router = APIRouter()

jobs = get_jobs()

## path parameter
@router.get("/jobs/{job_id}")
def get_job(job_id: int):
    if job_id > 0 and job_id < len(jobs):
        return jobs[job_id-1]
    return None

## query parameter
@router.get("/jobs")
def get_jobs(amountOfJobs: int = None):
    if amountOfJobs:
        return jobs[:amountOfJobs]      ## return the wanted amount
    return jobs

@router.get("/allJobs")
async def get_all_jobs():
    ## get from DB
    return jobs
