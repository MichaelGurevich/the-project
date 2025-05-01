from fastapi import FastAPI
from 

app = FastAPI()

@app.get("/")
def root():
    return "Books for everyone"
