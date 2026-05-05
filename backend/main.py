
from fastapi import FastAPI
from backend.app.routers import policies
from backend.app.database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="HealthShield API",
    description="API for managing health insurance policies.",
    version="1.0.0",
)

app.include_router(policies.router, prefix="/api")

@app.get("/health")
def health_check():
    return {"status": "ok"}
