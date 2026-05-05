
from pydantic import BaseModel
from typing import List, Optional
import datetime
from backend.app.models import PolicyStatus

class BeneficiaryBase(BaseModel):
    full_name: str
    relation: str

class BeneficiaryCreate(BeneficiaryBase):
    pass

class Beneficiary(BeneficiaryBase):
    id: str

    class Config:
        from_attributes = True

class PolicyBase(BaseModel):
    policy_type_id: str
    effective_date: datetime.datetime
    expiration_date: datetime.datetime
    premium_amount: float
    status: PolicyStatus

class PolicyCreate(PolicyBase):
    pass

class PolicyUpdate(BaseModel):
    policy_type_id: Optional[str] = None
    effective_date: Optional[datetime.datetime] = None
    expiration_date: Optional[datetime.datetime] = None
    premium_amount: Optional[float] = None
    status: Optional[PolicyStatus] = None
    beneficiaries: Optional[List[BeneficiaryCreate]] = None

class Policy(PolicyBase):
    id: str
    policy_no: str
    user_id: str
    date_registered: datetime.datetime
    beneficiaries: List[Beneficiary] = []

    class Config:
        from_attributes = True

class UserBase(BaseModel):
    email: str
    full_name: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: str
    policies: List[Policy] = []

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None
