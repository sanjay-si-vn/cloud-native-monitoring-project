# Cloud Native Monitoring Platform

A production-style DevOps project built using:

- Docker
- Kubernetes
- Terraform
- Prometheus
- Grafana
- EFK Stack
- GitHub Actions
- AWS

## Features

- Containerized Juice WRLD portfolio app
- Kubernetes deployment
- Infrastructure automation using Terraform
- Monitoring with Prometheus and Grafana
- Centralized logging with EFK stack
- CI/CD pipeline using GitHub Actions

## Architecture

Developer Push Code
↓
GitHub Actions CI/CD
↓
Docker Build
↓
DockerHub
↓
Kubernetes Deployment
↓
Prometheus + Grafana Monitoring
↓
EFK Stack Logging