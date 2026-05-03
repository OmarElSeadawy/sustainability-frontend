# AUC Carbon Data Hub — Sustainability Frontend

A full-stack web application for the **American University in Cairo (AUC)** Office of Sustainability. It provides a carbon-emissions survey tool that allows authorised users to create, complete, save, and export sustainability surveys, backed by AWS S3 storage.

---

## Repository structure

```
sustainability-frontend/
├── sustainability/   # React frontend (Create React App)
└── backend/          # Python / Flask REST API
```

---

## Prerequisites

| Tool | Minimum version |
|------|----------------|
| Node.js | 16 |
| npm | 8 |
| Python | 3.9 |
| PostgreSQL | 13 |
| Docker & Docker Compose | 20 / 2 |

---

## Frontend — `sustainability/`

### Install dependencies

```bash
cd sustainability
npm install
```

### Run in development mode

```bash
npm start
```

The app is served at <http://localhost:3000>.

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm test
```

---

## Backend — `backend/`

### Install dependencies

```bash
cd backend
pip install -r requirements.txt
```

### Environment variables

Create a file at `backend/.envs/dev.env` (see `backend/setenv.sh` for reference):

```dotenv
POSTGRES_USER=<db_user>
POSTGRES_PASSWORD=<db_password>
POSTGRES_DB=<db_name>
POSTGRES_HOST=<db_host>

AWS_ACCESS_KEY_ID=<aws_key>
AWS_SECRET_ACCESS_KEY=<aws_secret>
REGION_NAME=<aws_region>
```

### Run database migrations

```bash
cd backend
flask db upgrade
```

### Start the Flask server

```bash
python run.py
```

The API is served at <http://localhost:5000>.

---

## Docker Compose (recommended)

Both services and a PostgreSQL database can be started together:

```bash
docker compose -f backend/docker-compose.yml up --build
```

---

## Key features

- **User authentication** — register and log in with hashed passwords stored in PostgreSQL.
- **Survey management** — create, edit, delete, and list carbon-emissions surveys per user.
- **AWS S3 persistence** — survey JSON data is stored in and retrieved from an S3 bucket.
- **PDF export** — completed surveys can be exported as PDF documents.
- **Responsive UI** — Bootstrap 5 layout that works on desktop and mobile browsers.

---

## Contact

Office of Sustainability — <officeofsustainability@aucegypt.edu>  
AUC New Campus, New Cairo, Egypt
