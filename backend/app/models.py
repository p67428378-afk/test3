
import datetime
import uuid
from sqlalchemy import Column, String, DateTime, Float, ForeignKey, Enum as SQLAlchemyEnum
from sqlalchemy.orm import relationship
from backend.app.database import Base
import enum

class PolicyStatus(enum.Enum):
    ACTIVE = "ACTIVE"
    PENDING = "PENDING"
    CANCELLED = "CANCELLED"

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)

    policies = relationship("Policy", back_populates="owner")

class Policy(Base):
    __tablename__ = "policies"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    policy_no = Column(String, unique=True, index=True)
    user_id = Column(String, ForeignKey("users.id"))
    date_registered = Column(DateTime, default=datetime.datetime.utcnow)
    policy_type_id = Column(String) # Assuming policy types are managed elsewhere
    effective_date = Column(DateTime)
    expiration_date = Column(DateTime)
    premium_amount = Column(Float)
    status = Column(SQLAlchemyEnum(PolicyStatus), default=PolicyStatus.PENDING)

    owner = relationship("User", back_populates="policies")
    beneficiaries = relationship("Beneficiary", back_populates="policy")

class Beneficiary(Base):
    __tablename__ = "beneficiaries"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    full_name = Column(String)
    relation = Column(String)
    policy_id = Column(String, ForeignKey("policies.id"))

    policy = relationship("Policy", back_populates="beneficiaries")

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    action = Column(String)
    user_id = Column(String, ForeignKey("users.id"))
    details = Column(String)
