
from pydantic import BaseModel, EmailStr, HttpUrl
import uuid
from datetime import date, datetime

# Schemas for Credit Card Offers
class CreditCardOfferBase(BaseModel):
    name: str
    description: str | None = None
    apr: float | None = None
    annual_fee: float | None = None

class CreditCardOffer(CreditCardOfferBase):
    id: uuid.UUID
    name: str
    description: str
    apr: float
    annual_fee: float

    class Config:
        orm_mode = True

# Schemas for Personal Information
class PersonalInfo(BaseModel):
    full_name: str
    address: str
    phone_number: str
    email: EmailStr

# Schemas for Financial Information
class FinancialInfo(BaseModel):
    account_statement_url: HttpUrl | None = None
    credit_score: int | None = None
    annual_income: float | None = None

# Schemas for Employment Information
class EmploymentInfo(BaseModel):
    employer_name: str | None = None
    employer_address: str | None = None
    job_title: str | None = None
    employment_start_date: date | None = None

# Schemas for Applications
class ApplicationCreate(BaseModel):
    credit_card_id: uuid.UUID
    personal_info: PersonalInfo
    financial_info: FinancialInfo
    employment_info: EmploymentInfo

class Application(BaseModel):
    application_id: uuid.UUID
    status: str

    class Config:
        orm_mode = True
