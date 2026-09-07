# CloudFlow ☁️

> **Current Stage:** Cloud-native event-driven microservices platform deployed on Azure Kubernetes Service (AKS), with API Gateway, JWT authentication, independent PostgreSQL databases, RabbitMQ messaging, Redis caching, Docker, Kubernetes, Terraform, and autoscaling.

## Cloud-Native Distributed Order Processing System

CloudFlow is a cloud-native distributed order processing platform built using a microservices architecture.

The project demonstrates scalable backend development, asynchronous communication, containerization, Kubernetes orchestration, infrastructure as code, Azure cloud deployment, and horizontal autoscaling.

---

# 🚀 Project Overview

CloudFlow processes user orders through independent microservices.

```text
                         Client
                           |
                      API Gateway
                           |
             ┌─────────────┴─────────────┐
             ↓                           ↓
       User Service                Order Service
             ↓                           ↓
      PostgreSQL DB              PostgreSQL DB
                                         |
                                      RabbitMQ
                                         |
                                         ↓
                              Notification Service

                           Redis → Caching
```

---

# 🛠️ Technology Stack

**Backend**

* Node.js
* NestJS
* TypeScript
* REST APIs

**Database**

* PostgreSQL
* TypeORM

**Authentication**

* JWT
* Passport.js
* bcrypt

**Messaging & Caching**

* RabbitMQ
* Redis

**Containerization**

* Docker
* Docker Compose

**Orchestration**

* Kubernetes
* HPA
* Ingress

**Cloud & Infrastructure**

* Microsoft Azure
* Azure Kubernetes Service (AKS)
* Azure Container Registry (ACR)
* Terraform
* Azure Managed Storage

**CI/CD & Monitoring**

* GitHub Actions
* Trivy
* Prometheus
* Grafana

---

# 🔹 Microservices

## API Gateway

**Status: Completed ✅**

Handles client requests and communicates with backend services.

Implemented routes include:

```http
POST  /users/register
POST  /auth/login
GET   /users/profile

POST  /orders
GET   /orders/:id
GET   /orders/user/:userId
```

Local port:

```text
http://localhost:3002
```

---

## User Service

**Status: Completed ✅**

Responsibilities:

* User registration
* User login
* JWT authentication
* User profile management

Database:

```text
PostgreSQL
cloudflow_users
```

Local port:

```text
http://localhost:3000
```

---

## Order Service

**Status: Completed ✅**

Responsibilities:

* Create orders
* Update order status
* Retrieve user orders
* Publish order events

Database:

```text
PostgreSQL
cloudflow_orders
```

Implemented APIs:

```http
POST   /orders
GET    /orders/:id
GET    /orders/user/:userId
PATCH  /orders/:id/status
```

Local port:

```text
http://localhost:3001
```

---

## Notification Service

**Status: Completed ✅**

Consumes order events through RabbitMQ and processes notifications asynchronously.

---

# 📡 Event-Driven Architecture

When an order is created:

```text
Client
   ↓
API Gateway
   ↓
Order Service
   ↓
ORDER_CREATED
   ↓
RabbitMQ
   ↓
Notification Service
```

This allows order processing and notification handling to operate independently.

---

# 🔐 Authentication

CloudFlow uses JWT-based authentication.

```text
User
 ↓
Login
 ↓
API Gateway
 ↓
User Service
 ↓
JWT Token
 ↓
Protected APIs
```

---

# 🐳 Docker

All application services are containerized and can be run locally using Docker Compose.

```bash
docker compose up -d
```

---

# ☸️ Kubernetes & Azure

CloudFlow is deployed to **Azure Kubernetes Service (AKS)**.

Implemented:

* Kubernetes Deployments ✅
* Kubernetes Services ✅
* ConfigMaps ✅
* Secrets ✅
* Ingress ✅
* Horizontal Pod Autoscaling ✅
* Persistent storage ✅
* Azure Container Registry ✅
* Terraform infrastructure ✅

Application services are deployed as Kubernetes workloads with CPU-based autoscaling.

---

# ☁️ Infrastructure as Code

Azure infrastructure is provisioned using Terraform.

Current infrastructure includes:

* Azure Resource Group
* Azure Kubernetes Service
* Azure Container Registry
* Azure networking
* Kubernetes node infrastructure
* Managed persistent storage

---

# 🧪 Testing Through API Gateway

Client requests can be tested through:

```text
http://localhost:3002
```

Example order request:

```http
POST /orders
```

```json
{
  "userId": 1,
  "productName": "MacBook Pro",
  "quantity": 2
}
```

---

# 📊 Project Status

| Component                | Status |
| ------------------------ | ------ |
| User Service             | ✅      |
| Order Service            | ✅      |
| API Gateway              | ✅      |
| Notification Service     | ✅      |
| PostgreSQL               | ✅      |
| RabbitMQ                 | ✅      |
| Redis                    | ✅      |
| Docker                   | ✅      |
| Kubernetes               | ✅      |
| Ingress                  | ✅      |
| HPA                      | ✅      |
| Persistent Storage       | ✅      |
| Terraform                | ✅      |
| Azure AKS                | ✅      |
| Azure Container Registry | ✅      |
| CI/CD                    | 🚧     |
| Prometheus               | 🚧     |
| Grafana                  | 🚧     |

---

# 🗺️ Roadmap

### Next Steps

* GitHub Actions CI/CD
* Automated Docker builds
* Trivy security scanning
* Prometheus & Grafana monitoring
* Production health checks
* Further reliability and security improvements

---

# 👨‍💻 Author

**CloudFlow Project**

Built as a cloud-native microservices engineering project using **NestJS, PostgreSQL, RabbitMQ, Redis, Docker, Kubernetes, Terraform, and Azure**.
