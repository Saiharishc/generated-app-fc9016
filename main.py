from fastapi import FastAPI

app = FastAPI()

@app.get("/items")
def list_items():
    """List items for: build me a test app"""
    return [{"id": 1, "name": "item1"}, {"id": 2, "name": "item2"}]