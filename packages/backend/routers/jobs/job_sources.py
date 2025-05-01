#fetches all the data
jobs = ["Amazon", "Facebook", "Google", "Yahoo"]

def checkIfValidID(job_id: int):
    if job_id > 0 and job_id <= len(jobs):
        return True

def get_jobs():
    return jobs