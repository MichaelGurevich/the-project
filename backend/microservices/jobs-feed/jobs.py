from fastapi import APIRouter

router = APIRouter()

jobs = get_jobs()

## path parameter
@router.get("/jobs/{job_id}")
def get_job(job_id: int):
    if(job_id in jobs):
        return jobs[job_id]
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
