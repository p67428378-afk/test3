
from sqlalchemy.orm import Session
from backend.app import models, schemas

def get_policy(db: Session, policy_id: str):
    return db.query(models.Policy).filter(models.Policy.id == policy_id).first()

def update_policy(db: Session, policy_id: str, policy: schemas.PolicyUpdate):
    db_policy = db.query(models.Policy).filter(models.Policy.id == policy_id).first()
    if not db_policy:
        return None

    update_data = policy.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_policy, key, value)

    db.add(db_policy)
    db.commit()
    db.refresh(db_policy)
    return db_policy

def cancel_policy(db: Session, policy_id: str):
    db_policy = db.query(models.Policy).filter(models.Policy.id == policy_id).first()
    if not db_policy:
        return None

    db_policy.status = models.PolicyStatus.CANCELLED
    db.add(db_policy)
    db.commit()
    db.refresh(db_policy)
    return db_policy
