from fastapi import FastAPI
from packages.backend.routers.jobs.jobs import router as jobs_router
from packages.backend.routers.auth.auth import router as user_router
from packages.backend.routers.saved_jobs.saved_jobs import router as saved_jobs_router

app = FastAPI()
app.include_router(jobs_router)
app.include_router(user_router)
app.include_router(saved_jobs_router)

@app.get("/")
def root():
    return "Books for everyone"
