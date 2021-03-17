from typing import Optional
import random
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    number = random.randrange(0,100)
    return number
