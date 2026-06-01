# Cloud-Native Monitoring Project

## Overview

An end-to-end DevOps project demonstrating containerization, orchestration, monitoring, logging, infrastructure as code, and CI/CD automation.

## Tech Stack

* Docker
* Kubernetes
* Terraform
* Prometheus
* Grafana
* Elasticsearch
* Fluent Bit
* Kibana
* GitHub Actions

## Architecture

Developer → GitHub → GitHub Actions → Docker Hub → Kubernetes → Monitoring Stack

## Features

### Containerization

* Dockerized Node.js application

### Kubernetes

* Deployment with multiple replicas
* Service exposure using NodePort

### Monitoring

* Prometheus metrics collection
* Grafana dashboards

### Logging

* Elasticsearch
* Fluent Bit
* Kibana

### Infrastructure as Code

* Terraform configuration for cloud resources

### CI Pipeline

Automatically:

* Builds Docker image
* Pushes image to Docker Hub
* Validates Kubernetes manifests
* Validates Terraform configuration

## Project Structure

app/
kubernetes/
monitoring/
logging/
terraform/
.github/workflows/

## Learning Outcomes

* Docker image lifecycle
* Kubernetes deployments and services
* Infrastructure as Code using Terraform
* Monitoring and logging fundamentals
* CI/CD automation with GitHub Actions

## screenshots
<img width="1919" height="1044" alt="Screenshot 2026-05-31 110050" src="https://github.com/user-attachments/assets/bc2aa5e1-c003-49cb-becf-eccd47668760" />
