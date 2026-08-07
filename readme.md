# CloudFlow ☁️

## Cloud-Native Distributed Order Processing System

CloudFlow is a cloud-native distributed order processing platform built using a microservices architecture. The system demonstrates scalable backend development, asynchronous communication, containerization, cloud deployment, infrastructure as code, CI/CD automation, and monitoring.

---

# 🚀 Project Overview

CloudFlow processes user orders through independent microservices.

The platform is designed with:

* Microservices architecture
* Independent databases
* Asynchronous messaging
* Distributed caching
* Containerized deployment
* Kubernetes orchestration
* Cloud infrastructure automation

---

# 🏗️ Architecture

Current architecture:

```
                 Client
                   |
              API Gateway
                   |
        -----------------------
        |
   User Service
        |
   PostgreSQL
```

Future architecture:

```
                         Client
                           |
                    API Gateway
                           |
        ---------------------------------
        |                               |
   User Service                  Order Service
        |                               |
   PostgreSQL                    PostgreSQL
                                        |
                                   RabbitMQ
                                        |
                              Notification Service
                                        |
                                      Redis
```

---

# 🛠️ Technology Stack

## Backend

* Node.js
* NestJS
* TypeScript
* REST APIs

## Database

* PostgreSQL
* TypeORM

## Authentication

* JWT
* Passport.js
* bcrypt

## Messaging

* RabbitMQ (planned)

## Caching

* Redis (planned)

## Containerization

* Docker
* Docker Compose

## Orchestration

* Kubernetes

## Infrastructure

* Terraform
* Azure

## CI/CD

* GitHub Actions
* Docker
* Trivy

## Monitoring

* Prometheus
* Grafana

---

# 📂 Project Structure

```
cloudflow/

├── services/
│   ├── api-gateway/
│   ├── user-service/
│   ├── order-service/
│   └── notification-service/

├── database/

├── docker/

├── kubernetes/

├── terraform/

├── monitoring/

├── docker-compose.yml

└── README.md
```

---

# 🔹 Microservices

## API Gateway

Status: Planned

Responsibilities:

* Request routing
* Authentication
* Request validation
* Service communication

---

## User Service

Status: Completed ✅

Responsibilities:

* User registration
* User login
* JWT authentication
* User profile management

Database:

```
PostgreSQL
```

Implemented APIs:

```
POST   /users/register
POST   /auth/login
GET    /users/profile
```

---

## Order Service

Status: Planned

Responsibilities:

* Create orders
* Update order status
* Order history
* Order processing

Database:

```
PostgreSQL
```

---

## Notification Service

Status: Planned

Responsibilities:

* Consume order events
* Send notifications asynchronously

Communication:

```
Order Service
       |
    RabbitMQ
       |
Notification Service
```

---

# 🔐 Authentication Flow

```
User

 |

Login Request

 |

User Service

 |

Validate Credentials

 |

Generate JWT Token

 |

Client Uses Token

 |

Protected APIs
```

---

# 🗄️ Database Design

## Users Table

```
id
name
email
password_hash
created_at
updated_at
```

---

# ⚙️ Local Development Setup

## Clone Repository

```bash
git clone <repository-url>

cd cloudflow
```

---

## Install Dependencies

For services:

```bash
cd services/user-service

npm install
```

---

## Run User Service

```bash
npm run start:dev
```

---

# 🧪 Testing APIs

Register user:

```
POST /users/register
```

Example:

```json
{
"name":"John Doe",
"email":"john@example.com",
"password":"password123"
}
```

---

Login:

```
POST /auth/login
```

Response:

```json
{
"access_token":"JWT_TOKEN"
}
```

---

# 📌 Development Roadmap

## Phase 1 - Backend Foundation

✅ Repository setup
✅ User Service
✅ PostgreSQL integration
✅ JWT Authentication

---

## Phase 2 - Order Processing

✅ Order Service
✅ Separate order database
✅ Create order API
✅ Order history API
✅ Order status update API

---

## Phase 3 - Distributed Architecture

⬜ API Gateway
⬜ RabbitMQ messaging
⬜ Notification Service
⬜ Redis caching

---

## Phase 4 - DevOps

⬜ Docker containers
⬜ Kubernetes deployment
⬜ Terraform infrastructure
⬜ Azure deployment

---

## Phase 5 - Production Readiness

⬜ CI/CD pipeline
⬜ Monitoring dashboards
⬜ Logging
⬜ Security scanning

---

# 📊 Project Status

Current Progress:

```
Day 1 Completed ✅

User Service: Completed
Order Service: Pending
Messaging: Pending
Infrastructure: Pending
```

---

# 👨‍💻 Author

CloudFlow Project

Built as a cloud-native microservices engineering project.
