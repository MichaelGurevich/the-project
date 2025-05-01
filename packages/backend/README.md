# Backend Service

This is the backend service for the Twine application.

## Structure

```
backend/
├── microservices/          # Individual microservices
├── _pycache_/              # Python bytecode (auto-generated)
├── main.py                 # Main application entry point
└── requirements.txt        # Python dependencies
```

## Setup

1. Create a virtual environment (recommended)

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies

```bash
pip install -r requirements.txt
```

3. Environment Variables
   Copy the `.env.example` file to `.env` and update the values:

```bash
cp .env.example .env
```

## Running

```bash
# Directly with Python
python main.py

# Using NX
nx run backend:start
# OR from project root
pnpm backend
```

## Development

### Adding New Dependencies

After adding a new Python package dependency:

```bash
pip freeze > requirements.txt
```

### Running Tests

```bash
# Directly with pytest
python -m pytest

# Using NX
nx run backend:test
# OR from project root
pnpm backend:test
```

### Linting

```bash
# Directly with flake8
python -m flake8 .

# Using NX
nx run backend:lint
```

## Microservices

The backend is organized into microservices, each with its own responsibilities:

- **Service 1**: Description of service 1
- **Service 2**: Description of service 2
- (Add more as they are developed)

## API Documentation

API documentation can be accessed when the server is running at:
http://localhost:8000/docs (if using FastAPI or similar)
