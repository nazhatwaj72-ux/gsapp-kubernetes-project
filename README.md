# GSApp Kubernetes Project

**Dockerized Node.js Todo Application deployed on Kubernetes with Ingress, Persistent Storage, ConfigMap, Health Probes, and Horizontal Pod Autoscaling.**

---

## Project Overview

This project demonstrates a complete cloud-native setup for a Node.js application using Kubernetes:

- Containerized with **Docker**
- Managed using **Kubernetes Deployments**
- Exposed via **ClusterIP Service** and **Ingress**
- Persistent storage using **PersistentVolumeClaim (PVC)**
- Configuration externalized with **ConfigMap**
- Automatic scaling using **Horizontal Pod Autoscaler (HPA)**
- Health monitoring with **liveness** and **readiness probes**

This setup simulates a **production-ready microservice** environment.

---

## Architecture


User
│
▼
Ingress
│
▼
Service (ClusterIP)
│
▼
Deployment
│
▼
Pods (Auto Scaling via HPA)
│
▼
Persistent Volume (PVC)


---

## Technologies Used

- **Node.js** (Express)
- **Docker**
- **Kubernetes**
  - Deployment
  - Service (ClusterIP)
  - Ingress
  - ConfigMap
  - PersistentVolumeClaim
  - Health Probes
  - Horizontal Pod Autoscaler
- **Minikube** (for local testing)

---

## Setup & Deployment

### 1. Clone Repository

```bash
git clone git@github.com:nazhatwaj72-ux/gsapp-kubernetes-project.git
cd gsapp-kubernetes-project
```
### 2. Build Docker Image
```bash
docker build -t nazwaj72/gsapp:v1 ./docker
3. Start Minikube and Enable Ingress
```bash
minikube start
minikube addons enable ingress
4. Apply Kubernetes Resources
```bash
kubectl apply -f k8s/
5. Check Resources
```bash
kubectl get pods
kubectl get svc
kubectl get ingress
kubectl get hpa
6. Access Application
```bash
Add gsapp to your /etc/hosts pointing to Minikube IP:

echo "$(minikube ip) gsapp.local" | sudo tee -a /etc/hosts

Open in browser:
```bash
http://gsapp.local
