
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from server import crud, schemas
from server.database import get_db
from typing import List

router = APIRouter()

@router.get("/credit-cards", response_model=List[schemas.CreditCardOffer])
def read_credit_card_offers(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    offers = crud.get_credit_card_offers(db, skip=skip, limit=limit)
    return offers
