#fetches all the data
jobs = ["Amazon", "Facebook", "Google", "Yahoo"]

def checkIfValidID(job_id: str):
    #very temp!!
    job_id_int = int(job_id)
    if job_id_int > 0 and job_id_int <= len(jobs):
        return True

def get_jobs():
    return jobs