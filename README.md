# DevConnect

[![Java](https://img.shields.io/badge/Java-17-blue)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0.0-brightgreen)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-24.0.2-blue)](https://www.docker.com/)

---

## Overview

**DevConnect** is a full-stack web application designed for developers to create profiles, showcase their skills, and connect with other developers — similar to a mini LinkedIn tailored for software developers.

---

## Features

- User Registration and Login with **JWT Authentication**
- Developer Profile Management (bio, skills, GitHub link)
- Secure API endpoints with Spring Security
- Responsive React frontend
- PostgreSQL database for persistent storage
- Dockerized PostgreSQL for easy setup

---

## Tech Stack

| Layer       | Technology          |
| ----------- | ------------------- |
| Backend     | Java 17, Spring Boot, Spring Security, JWT |
| Frontend    | React.js, Axios     |
| Database    | PostgreSQL          |
| Container   | Docker              |

---

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven
- Node.js and npm
- Docker and Docker Compose
- IDE (IntelliJ IDEA / VS Code)

---

### Setup Instructions

1. **Clone the repository and extract ZIP:**

   ```bash
   unzip DevConnectFull.zip
   cd DevConnectFull

2. **Start PostgreSQL via Docker:**
    docker-compose up -d

3.**Run Backend:**

   bash
   Copy
   Edit
4.**cd frontend**
  npm install
  npm start

5. http://localhost:3000

## API ENDPOINTS

| Method | Endpoint                  | Description               |
| ------ | ------------------------- | ------------------------- |
| POST   | /api/auth/register        | Register new user         |
| POST   | /api/auth/login           | Login and get JWT token   |
| GET    | /api/auth/profile/{email} | Get user profile by email |

## PROJECT STRUCTURE

DevConnectFull/
├── backend/             # Spring Boot backend code
├── frontend/            # React frontend code
├── docker-compose.yml   # Docker setup for PostgreSQL


## Future Improvements
1.Add Follow/Endorse features between developers
2.Add real-time chat with WebSockets
3.Implement OAuth login (GitHub, Google)
4.Deploy backend on Render, frontend on Vercel
5.Improve UI with Material-UI or Tailwind CSS

## Author
Amitabh Kumar
https://www.linkedin.com/in/kamitabh/

## License
This project is licensed under the MIT License.





