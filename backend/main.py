from fastapi import FastAPI
from microservices.jobs import router as jobs_router


app = FastAPI()
app.include_router(jobs_router)

@app.get("/")
def root():
    return "Books for everyone"
