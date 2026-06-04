
from fastapi import FastAPI
from server.database import engine, Base
from server.api.v1.endpoints import credit_cards, applications

# This will create the tables in the database
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Credit Card Application Platform",
    description="API for managing credit card applications and offers.",
    version="1.0.0"
)

app.include_router(credit_cards.router, prefix="/api/v1", tags=["Credit Cards"])
app.include_router(applications.router, prefix="/api/v1", tags=["Applications"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Credit Card Application Platform"}
