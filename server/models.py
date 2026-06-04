
import uuid
from sqlalchemy import Column, String, Float, Integer, Date, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.types import UUID
from server.database import Base
import datetime

class CreditCardOffer(Base):
    __tablename__ = "credit_card_offers"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    description = Column(String)
    apr = Column(Float)
    annual_fee = Column(Float)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    applications = relationship("Application", back_populates="credit_card_offer")

class Application(Base):
    __tablename__ = "applications"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    credit_card_offer_id = Column(UUID(as_uuid=True), ForeignKey("credit_card_offers.id"))
    status = Column(String, default="pending")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    credit_card_offer = relationship("CreditCardOffer", back_populates="applications")
    personal_info = relationship("PersonalInformation", uselist=False, back_populates="application")
    financial_info = relationship("FinancialInformation", uselist=False, back_populates="application")
    employment_info = relationship("EmploymentInformation", uselist=False, back_populates="application")

class PersonalInformation(Base):
    __tablename__ = "personal_information"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    application_id = Column(UUID(as_uuid=True), ForeignKey("applications.id"))
    full_name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)

    application = relationship("Application", back_populates="personal_info")

class FinancialInformation(Base):
    __tablename__ = "financial_information"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    application_id = Column(UUID(as_uuid=True), ForeignKey("applications.id"))
    account_statement_url = Column(String)
    credit_score = Column(Integer)
    annual_income = Column(Float)

    application = relationship("Application", back_populates="financial_info")

class EmploymentInformation(Base):
    __tablename__ = "employment_information"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    application_id = Column(UUID(as_uuid=True), ForeignKey("applications.id"))
    employer_name = Column(String)
    employer_address = Column(String)
    job_title = Column(String)
    employment_start_date = Column(Date)

    application = relationship("Application", back_populates="employment_info")
