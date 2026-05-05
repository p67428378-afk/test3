
import pytest
from fastapi.testclient import TestClient
from sqlalchemy.orm import Session
from backend.app import models, schemas
import uuid
import datetime


def test_read_policy(client: TestClient, db_session: Session):
    # Create a user and a policy
    user = models.User(email="test@example.com", hashed_password="password", full_name="Test User")
    db_session.add(user)
    db_session.commit()
    db_session.refresh(user)

    policy = models.Policy(
        policy_no="HS-2023-001",
        user_id=user.id,
        policy_type_id="Gold Plan",
        effective_date=datetime.datetime(2023, 1, 1),
        expiration_date=datetime.datetime(2024, 12, 31),
        premium_amount=300.00,
        status=models.PolicyStatus.ACTIVE
    )
    db_session.add(policy)
    db_session.commit()
    db_session.refresh(policy)

    response = client.get(f"/api/policies/{policy.id}")
    assert response.status_code == 200
    data = response.json()
    assert data["policy_no"] == "HS-2023-001"
    assert data["status"] == "ACTIVE"

def test_update_policy(client: TestClient, db_session: Session):
    user = models.User(email="test2@example.com", hashed_password="password", full_name="Test User 2")
    db_session.add(user)
    db_session.commit()
    db_session.refresh(user)

    policy = models.Policy(
        policy_no="HS-2023-002",
        user_id=user.id,
        policy_type_id="Silver Plan",
        effective_date=datetime.datetime(2023, 1, 1),
        expiration_date=datetime.datetime(2024, 12, 31),
        premium_amount=200.00,
        status=models.PolicyStatus.ACTIVE
    )
    db_session.add(policy)
    db_session.commit()
    db_session.refresh(policy)

    update_data = {"premium_amount": 250.00}
    response = client.put(f"/api/policies/{policy.id}", json=update_data)
    assert response.status_code == 200
    data = response.json()
    assert data["premium_amount"] == 250.00

def test_cancel_policy(client: TestClient, db_session: Session):
    user = models.User(email="test3@example.com", hashed_password="password", full_name="Test User 3")
    db_session.add(user)
    db_session.commit()
    db_session.refresh(user)

    policy = models.Policy(
        policy_no="HS-2023-003",
        user_id=user.id,
        policy_type_id="Bronze Plan",
        effective_date=datetime.datetime(2023, 1, 1),
        expiration_date=datetime.datetime(2024, 12, 31),
        premium_amount=100.00,
        status=models.PolicyStatus.ACTIVE
    )
    db_session.add(policy)
    db_session.commit()
    db_session.refresh(policy)

    response = client.post(f"/api/policies/{policy.id}/cancel")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "CANCELLED"

def test_read_policy_not_found(client: TestClient):
    response = client.get(f"/api/policies/{uuid.uuid4()}")
    assert response.status_code == 404
