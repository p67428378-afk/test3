
from sqlalchemy.orm import Session
from server import models, schemas
import uuid

def get_credit_card_offers(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.CreditCardOffer).offset(skip).limit(limit).all()

def create_application(db: Session, application: schemas.ApplicationCreate):
    # Create the main application entry
    db_application = models.Application(
        credit_card_offer_id=application.credit_card_id,
        status="pending"
    )
    db.add(db_application)
    db.commit()
    db.refresh(db_application)

    # Create the related information entries
    db_personal_info = models.PersonalInformation(
        **application.personal_info.model_dump(),
        application_id=db_application.id
    )
    db_financial_info = models.FinancialInformation(
        **application.financial_info.model_dump(),
        application_id=db_application.id
    )
    db_employment_info = models.EmploymentInformation(
        **application.employment_info.model_dump(),
        application_id=db_application.id
    )

    db.add(db_personal_info)
    db.add(db_financial_info)
    db.add(db_employment_info)
    db.commit()

    return db_application
