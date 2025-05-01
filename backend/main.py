from fastapi import FastAPI
from microservices.jobs.jobs import router as jobs_router
from microservices.auth.user import router as user_router

app = FastAPI()
app.include_router(jobs_router)
app.include_router(user_router)

@app.get("/")
def root():
    return "Books for everyone"
