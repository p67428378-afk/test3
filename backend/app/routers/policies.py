
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend.app import schemas, services, database, models

router = APIRouter(
    prefix="/policies",
    tags=["policies"],
)

@router.get("/{policy_id}", response_model=schemas.Policy)
def read_policy(policy_id: str, db: Session = Depends(database.get_db)):
    db_policy = services.get_policy(db, policy_id=policy_id)
    if db_policy is None:
        raise HTTPException(status_code=404, detail="Policy not found")
    return db_policy

@router.put("/{policy_id}", response_model=schemas.Policy)
def update_policy(policy_id: str, policy: schemas.PolicyUpdate, db: Session = Depends(database.get_db)):
    db_policy = services.update_policy(db, policy_id=policy_id, policy=policy)
    if db_policy is None:
        raise HTTPException(status_code=404, detail="Policy not found")
    return db_policy

@router.post("/{policy_id}/cancel", response_model=schemas.Policy)
def cancel_policy(policy_id: str, db: Session = Depends(database.get_db)):
    db_policy = services.cancel_policy(db, policy_id=policy_id)
    if db_policy is None:
        raise HTTPException(status_code=404, detail="Policy not found")
    return db_policy
