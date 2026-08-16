# CloudFlow ☁️

> **Current Stage:** Event-driven microservices architecture with API Gateway, JWT authentication, independent PostgreSQL databases, and RabbitMQ event publishing.

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

```text
                 Client
                   |
              API Gateway
                   |
        -----------------------
        |                     |
   User Service         Order Service
        |                     |
   PostgreSQL           PostgreSQL
                              |
                           RabbitMQ
```

Future architecture:

```text
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

* RabbitMQ

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

```text
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

Status: Completed ✅

Responsibilities:

* Request routing
* Authentication forwarding
* Request validation
* Service communication

Implemented Routes:

```http
POST   /users/register
POST   /auth/login
GET    /users/profile
POST   /orders
GET    /orders/:id
```

Runs on: **http://localhost:3002**

---

## User Service

Status: Completed ✅

Responsibilities:

* User registration
* User login
* JWT authentication
* User profile management

Database:

```text
PostgreSQL (cloudflow_users)
```

Implemented APIs:

```http
POST   /users/register
POST   /auth/login
GET    /users/profile
```

Runs on: **http://localhost:3000**

---

## Order Service

Status: Completed ✅

Responsibilities:

* Create orders
* Update order status
* Retrieve order history
* Manage order lifecycle
* Publish order events

Database:

```text
PostgreSQL (cloudflow_orders)
```

Implemented APIs:

```http
POST   /orders
GET    /orders/:id
GET    /orders/user/:userId
PATCH  /orders/:id/status
```

Runs on: **http://localhost:3001**

---

## Notification Service

Status: Planned ⬜

Responsibilities:

* Consume order events
* Send notifications asynchronously
* Integrate with Redis cache

---

# 📡 Event-Driven Architecture

When an order is created, the Order Service publishes an event to RabbitMQ.

```text
Client
   |
API Gateway
   |
Order Service
   |
ORDER_CREATED Event
   |
RabbitMQ Queue (order-events)
```

Example event:

```json
{
  "type": "ORDER_CREATED",
  "orderId": 1,
  "userId": 1,
  "productName": "MacBook Pro"
}
```

---

# 🔐 Authentication Flow

```text
User
  |
Login Request
  |
API Gateway
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

```text
id
name
email
password_hash
created_at
updated_at
```

## Orders Table

```text
id
user_id
product_name
quantity
status
created_at
updated_at
```

Order status values:

* PENDING
* PROCESSING
* COMPLETED
* CANCELLED

---

# ⚙️ Local Development Setup

## Clone Repository

```bash
git clone <repository-url>
cd cloudflow
```

---

## Start Infrastructure

```bash
docker compose up -d
```

This starts:

* postgres-users
* postgres-orders
* pgadmin
* rabbitmq

---

## Run User Service

```bash
cd services/user-service
npm install
npm run start:dev
```

Runs on: **http://localhost:3000**

---

## Run Order Service

```bash
cd services/order-service
npm install
npm run start:dev
```

Runs on: **http://localhost:3001**

---

## Run API Gateway

```bash
cd services/api-gateway
npm install
npm run start:dev
```

Runs on: **http://localhost:3002**

---

# 🐘 pgAdmin

Open:

```text
http://localhost:5050
```

Credentials:

```text
Email: admin@cloudflow.com
Password: admin
```

---

# 🐰 RabbitMQ Management UI

Open:

```text
http://localhost:15672
```

Credentials:

```text
Username: guest
Password: guest
```

---

# 🧪 Testing Through API Gateway

All client requests should go through the API Gateway (`localhost:3002`).

## Register User

```http
POST http://localhost:3002/users/register
```

Example:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

## Login

```http
POST http://localhost:3002/auth/login
```

Response:

```json
{
  "access_token": "JWT_TOKEN"
}
```

---

## Get Profile

```http
GET http://localhost:3002/users/profile
Authorization: Bearer <token>
```

---

## Create Order

```http
POST http://localhost:3002/orders
```

Example:

```json
{
  "userId": 1,
  "productName": "MacBook Pro",
  "quantity": 2
}
```

---

## Get Order

```http
GET http://localhost:3002/orders/1
```

---

# 📌 Development Roadmap

# 📌 Development Roadmap

## Phase 1 - Backend Foundation

- ✅ Repository setup
- ✅ User Service
- ✅ PostgreSQL integration
- ✅ JWT Authentication

---

## Phase 2 - Order Processing

- ✅ Order Service
- ✅ Separate order database
- ✅ Create order API
- ✅ Order history API
- ✅ Order status update API

---

## Phase 3 - Distributed Architecture

- ✅ API Gateway
- ✅ RabbitMQ messaging
- ✅ Notification Service
- ✅ Redis caching

---

## Phase 4 - Kubernetes

- ✅ Dockerized microservices
- ✅ Kubernetes Deployments
- ✅ Kubernetes Services
- ✅ ConfigMaps
- ✅ Secrets
- ⬜ Ingress
- ⬜ HPA
- ⬜ Persistent storage

---

## Phase 5 - Cloud Infrastructure

- ⬜ Terraform
- ⬜ Azure Container Registry
- ⬜ Azure Kubernetes Service (AKS)
- ⬜ Azure networking

---

## Phase 6 - CI/CD & Observability

- ⬜ GitHub Actions
- ⬜ Automated Docker builds
- ⬜ Trivy security scanning
- ⬜ Prometheus
- ⬜ Grafana
- ⬜ Centralized logging

---

# 📊 Project Status

# 📊 Project Status

Current Progress:

Day 6 - Kubernetes Deployment ✅

User Service: Completed ✅
Order Service: Completed ✅
API Gateway: Completed ✅
Notification Service: Completed ✅
PostgreSQL: Completed ✅
RabbitMQ: Completed ✅
Redis: Completed ✅

Kubernetes:
- Deployments ✅
- Services ✅
- ConfigMaps ✅
- Secrets ✅
- Application deployment ✅
- End-to-end Kubernetes testing ✅

Terraform:
- AKS cluster ⬜
- Azure Container Registry ⬜
- Networking ⬜
- Infrastructure provisioning ⬜

CI/CD:
- GitHub Actions ⬜

Monitoring:
- Prometheus ⬜
- Grafana ⬜



---

# 👨‍💻 Author

**CloudFlow Project**

Built as a cloud-native microservices engineering project using **NestJS, PostgreSQL, RabbitMQ, Docker, Kubernetes, Terraform, and Azure**.
