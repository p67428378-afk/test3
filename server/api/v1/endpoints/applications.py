
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from server import crud, schemas
from server.database import get_db

router = APIRouter()

@router.post("/applications", response_model=schemas.Application)
def create_application(application: schemas.ApplicationCreate, db: Session = Depends(get_db)):
    try:
        db_application = crud.create_application(db=db, application=application)
        return {"application_id": db_application.id, "status": db_application.status}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
