# NexaRise 🚀

**Digital Employment & Mentorship Platform — Sierra Leone**

> Connecting job seekers, employers, and professional mentors in one accessible, low-bandwidth-friendly platform.

![Version](https://img.shields.io/badge/version-1.0-blue) ![Status](https://img.shields.io/badge/status-in%20development-orange) ![SDG](https://img.shields.io/badge/SDG-4%20%7C%208-green) ![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

## Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Key Features](#key-features)
- [User Roles](#user-roles)
- [Tech Stack](#tech-stack)
- [Database Schema](#database-schema)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Overview](#api-overview)
- [Development Roadmap](#development-roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

NexaRise is a Progressive Web App (PWA) built to bridge the gap between job seekers, employers, and professional mentors in Sierra Leone. Designed to work on 2G and 3G connections, it provides an inclusive platform for young people across the country — including rural areas — to discover employment opportunities, submit applications, and access structured career mentorship.

The platform is submitted in support of:
- **SDG 4** — Quality Education
- **SDG 8** — Decent Work & Economic Growth

Submitted to the **Ministry of Youth Affairs & Youth Empowerment Stakeholders**, Freetown, Sierra Leone.

---

## Problem Statement

Sierra Leone faces a severe youth employment crisis:

- **70%** of young people aged 15–35 are unemployed or underemployed *(Statistics Sierra Leone, 2021)*
- Youth unemployment accounts for **68.9%** of all unemployment in the country *(IJSDR, 2024)*
- Over **88%** of non-agricultural self-employment is informal *(ILO, 2024)*
- Young graduates have no structured access to professional mentorship
- Recruitment remains unstructured and exclusionary, especially outside Freetown

NexaRise addresses each of these gaps through a single, unified digital platform.

---

## Key Features

| Feature | Description |
|---|---|
| **Role-Based Access** | Tailored dashboards for job seekers, employers, mentors, and admins |
| **Job Posting & Search** | Employers post vacancies; seekers search by keyword, location, and industry |
| **One-Click Application** | Apply to jobs with a saved profile and cover letter |
| **Application Tracker** | Real-time status tracking for every application submitted |
| **Mentor Discovery** | Browse mentors by expertise and send mentorship requests |
| **Session Scheduling** | Schedule mentorship sessions with automated reminders |
| **Internal Messaging** | Direct messaging between all connected users |
| **Smart Notifications** | In-app, email, and SMS alerts |
| **Admin Dashboard** | User management, job post moderation, analytics, and announcements |

---

## User Roles

```
┌────────────────┬────────────────────────────────────────────────────┐
│ Role           │ Capabilities                                        │
├────────────────┼────────────────────────────────────────────────────┤
│ Job Seeker     │ Create profile, upload CV, search & apply for jobs, │
│                │ track applications, request mentorship              │
├────────────────┼────────────────────────────────────────────────────┤
│ Employer       │ Post & manage vacancies, review candidates,         │
│                │ communicate with applicants                         │
├────────────────┼────────────────────────────────────────────────────┤
│ Mentor         │ List expertise, accept requests, schedule sessions, │
│                │ guide career development                            │
├────────────────┼────────────────────────────────────────────────────┤
│ Administrator  │ User management, content moderation, analytics,     │
│                │ announcement broadcasting                           │
└────────────────┴────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js (PWA) |
| **Backend** | Node.js + Express |
| **Database** | PostgreSQL |
| **Cloud Hosting** | AWS |
| **Authentication** | JWT |
| **Encryption** | HTTPS / bcrypt |
| **Notifications** | Email (SMTP) + SMS Gateway |
| **Methodology** | Agile Scrum — 7 sprints × 2 weeks |

---

## Database Schema

The platform uses **9 core tables**. See the full ERD in `/docs/erd.drawio`.

```
USERS
 ├── JOB_SEEKER_PROFILES  (1:1)
 ├── EMPLOYER_PROFILES    (1:1)
 ├── MENTOR_PROFILES      (1:1)
 ├── MESSAGES             (1:M — sender & receiver)
 └── NOTIFICATIONS        (1:M)

EMPLOYER_PROFILES
 └── JOB_POSTS            (1:M)

JOB_POSTS
 └── APPLICATIONS         (1:M)

JOB_SEEKER_PROFILES
 ├── APPLICATIONS         (1:M)
 └── MENTORSHIP_REQUESTS  (1:M)

MENTOR_PROFILES
 └── MENTORSHIP_REQUESTS  (1:M)
```

---

## Project Structure

```
nexarise/
├── client/                  # React PWA frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       │   ├── seeker/
│       │   ├── employer/
│       │   ├── mentor/
│       │   └── admin/
│       ├── hooks/
│       ├── services/        # API calls
│       └── utils/
│
├── server/                  # Node.js backend
│   ├── controllers/
│   ├── middleware/
│   │   ├── auth.js          # JWT verification
│   │   └── rbac.js          # Role-based access control
│   ├── models/              # PostgreSQL models
│   ├── routes/
│   └── utils/
│       ├── email.js
│       └── sms.js
│
├── docs/
│   ├── erd.drawio           # Entity Relationship Diagram
│   └── api.md               # API reference
│
├── .env.example
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL 14+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/nexarise.git
cd nexarise

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### Database Setup

```bash
# Create the PostgreSQL database
createdb nexarise_db

# Run migrations
cd server
npm run migrate
```

### Running Locally

```bash
# Start the backend (from /server)
npm run dev

# Start the frontend (from /client)
npm start
```

The app will be available at `http://localhost:3000`.

---

## Environment Variables

Create a `.env` file in `/server` based on `.env.example`:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/nexarise_db

# Auth
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d

# Email
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your_password

# SMS
SMS_GATEWAY_URL=https://your-sms-provider.com/api
SMS_API_KEY=your_sms_key

# App
PORT=5000
NODE_ENV=development
```

---

## API Overview

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/auth/register` | Register a new user | Public |
| POST | `/api/auth/login` | Login and receive JWT | Public |
| GET | `/api/jobs` | List all active job posts | Public |
| POST | `/api/jobs` | Create a job post | Employer |
| POST | `/api/jobs/:id/apply` | Apply for a job | Seeker |
| GET | `/api/applications/me` | View my applications | Seeker |
| GET | `/api/mentors` | Browse available mentors | Seeker |
| POST | `/api/mentors/:id/request` | Send mentorship request | Seeker |
| GET | `/api/messages` | View inbox | All |
| POST | `/api/messages` | Send a message | All |
| GET | `/api/admin/users` | Manage users | Admin |

Full API documentation is available in `/docs/api.md`.

---

## Development Roadmap

```
Sprint 1  — Project setup, auth, role-based routing
Sprint 2  — Job seeker profile & CV upload
Sprint 3  — Employer profile & job posting
Sprint 4  — Job search, filtering & applications
Sprint 5  — Mentor profiles & mentorship requests
Sprint 6  — Messaging, notifications, scheduling
Sprint 7  — Admin dashboard, testing & deployment
```

Total duration: ~6 months across 7 × 2-week sprints.

---

## Contributing

This project is in active development. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please follow the existing code style and include tests for new features.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

<p align="center">
  Built with ❤️ in Freetown, Sierra Leone &nbsp;|&nbsp; Supporting SDG 4 & SDG 8
</p>
