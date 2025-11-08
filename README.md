🚀 Full Stack Application Deployment on AWS
React + Node.js + Elastic Load Balancer + VPC
Deploying a scalable and highly available Full Stack Web Application using AWS EC2, Elastic Load Balancing (ELB), and VPC Networking.
This project demonstrates cloud deployment best practices — combining frontend, backend, and AWS infrastructure into one seamless architecture.

🌟 Project Overview
This project showcases:

A React frontend served through a Node.js + Express backend.
Deployment on multiple EC2 instances behind an Application Load Balancer (ALB).
Network isolation and security via AWS VPC, Subnets, and Security Groups.
Scalable design with Auto Scaling Groups (ASG) and High Availability setup.
🧱 Tech Stack
Layer	Technology
Frontend	React.js
Backend	Node.js + Express
Database (optional)	AWS RDS / MongoDB Atlas
Cloud Infrastructure	AWS EC2, Elastic Load Balancer (ELB), VPC
Process Manager	PM2
Version Control	Git & GitHub
fullstack-app/ ├── backend/ │ ├── server.js │ ├── package.json └── frontend/ ├── src/ ├── package.json └── build/

🗂️ Project Structure
⚙️ Backend Setup
File: backend/server.js

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/api', (req, res) => {
  res.json({ message: "Backend running successfully on AWS!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


🧩 Architecture Diagram
          ┌────────────────────────────┐
          │      AWS Elastic LB        │
          │ (Distributes traffic evenly)│
          └────────────┬───────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
┌──────────────┐             ┌──────────────┐
│ EC2 Instance │             │ EC2 Instance │
│ React + Node │             │ React + Node │
└──────────────┘             └──────────────┘
        │                             │
        └──────────────┬──────────────┘
                       │
                 ┌──────────────┐
                 │ AWS VPC + IGW│
                 │   (Networking) │
                 └──────────────┘

