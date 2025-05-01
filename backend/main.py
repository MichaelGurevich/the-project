from fastapi import FastAPI

app = FastAPI()
#app.include_router(jobs_router)

@app.get("/")
def root():
    return "Books for everyone"
