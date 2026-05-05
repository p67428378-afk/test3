# HealthShield - Health Insurance Management Portal

This project is a health insurance management portal that allows policyholders to view, update, and cancel their health insurance policies.

## Application Architecture

The application follows a microservices architecture with a React frontend and a FastAPI backend.

- **Frontend**: A React single-page application (SPA) built with Vite.
- **Backend**: A Python backend using the FastAPI framework.
- **Database**: A relational database (PostgreSQL recommended) for storing user and policy data.

## Project Structure

```
.
├── backend
│   ├── app
│   │   ├── __init__.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── services.py
│   │   └── routers
│   │       ├── __init__.py
│   │       └── policies.py
│   ├── tests
│   │   ├── __init__.py
│   │   ├── conftest.py
│   │   └── test_policies.py
│   ├── __init__.py
│   ├── main.py
│   └── requirements.txt
└── frontend
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    └── src
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── components
        │   ├── dashboard
        │   │   ├── CurrentPolicyCard.jsx
        │   │   ├── FindClinicCard.jsx
        │   │   ├── QuickVisualMetric.jsx
        │   │   ├── RecentActivityCard.jsx
        │   │   └── WellnessProgramCard.jsx
        │   └── layout
        │       ├── Header.jsx
        │       └── Sidebar.jsx
        ├── pages
        │   └── DashboardPage.jsx
        └── services
            └── api.js
```

## Prerequisites

- Python 3.10+
- Node.js 18+
- npm
- git

## Setup Instructions

### Backend

1.  Navigate to the `backend` directory.
2.  Create a virtual environment: `python -m venv venv`
3.  Activate the virtual environment: `source venv/bin/activate`
4.  Install the dependencies: `pip install -r requirements.txt`
5.  Run the application: `uvicorn backend.main:app --reload`

### Frontend

1.  Navigate to the `frontend` directory.
2.  Install the dependencies: `npm install`
3.  Run the development server: `npm run dev`

## API Documentation

- `GET /api/policies/{policy_id}`: Get policy details.
- `PUT /api/policies/{policy_id}`: Update a policy.
- `POST /api/policies/{policy_id}/cancel`: Cancel a policy.

## Running Tests

### Backend

1.  Navigate to the `backend` directory.
2.  Run the tests: `pytest`
