# 🚀 Employee Management System

A Full Stack Employee Management System built using **Node.js**, **Express.js**, **MongoDB**, and **Vanilla JavaScript** following the **MVC Architecture**. This project allows users to perform complete CRUD operations on employee records through a responsive web interface.

---

## 📌 Project Overview

The Employee Management System is a simple and efficient web application that helps manage employee records. It provides a responsive frontend connected to a RESTful backend API with MongoDB for data storage.

This project was developed as part of the **DecodeLabs Full Stack Development Internship (Week 3 Project).**

---

# ✨ Features

- ✅ Add Employee
- ✅ View All Employees
- ✅ Update Employee Details
- ✅ Delete Employee
- ✅ Search Employees
- ✅ MongoDB Database Integration
- ✅ REST API
- ✅ MVC Architecture
- ✅ Service Layer
- ✅ Input Validation
- ✅ Error Handling
- ✅ Responsive User Interface

---

# 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Tools
- VS Code
- Thunder Client
- Git
- GitHub

---

# 📂 Project Structure

```
Employee-Management-System/

│
├── client/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
│
├── server/
│   ├── app.js
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── validators/
│   ├── utils/
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# 📡 REST API Endpoints

| Method | Endpoint | Description |
|----------|--------------------------|----------------------|
| GET | /api/employees | Get All Employees |
| GET | /api/employees/:id | Get Employee By ID |
| POST | /api/employees | Create Employee |
| PUT | /api/employees/:id | Update Employee |
| DELETE | /api/employees/:id | Delete Employee |

---

# 📥 Installation

## Clone Repository

```bash
git clone https://github.com/R-Rubab/Full-Stack-Development-Project
```

---

## Go to Server Folder

```bash
cd server
```

---

## Install Dependencies

```bash
npm install
```

---

## Create .env File

```
PORT=5001

MONGO_URI=mongodb://127.0.0.1:27017/employee_management
```

---

## Run Server

```bash
npm run dev
```

---

## Open Frontend

Open the **client/index.html** file using **Live Server** in VS Code.

---


# 📸 Project Screenshots

## 🌙 Dashboard (Dark Mode)

Shows the Employee Management Dashboard with statistics, department-wise chart, employee management form, employee directory, search, filtering, and export functionality.

![Dashboard Dark](https://github.com/R-Rubab/Full-Stack-Development-Project/blob/main/week3_employee_api_database/client/screenshots/s1.png)

---

## ☀️ Dashboard (Light Mode)

Light theme version of the Employee Management System demonstrating responsive design and user-friendly interface.

![Dashboard Light](https://github.com/R-Rubab/Full-Stack-Development-Project/blob/main/week3_employee_api_database/client/screenshots/s2.png)

---

## 🔍 Employee Search

Demonstrates the real-time search functionality that filters employees by name while maintaining dashboard statistics and department charts.

![Employee Search](https://github.com/R-Rubab/Full-Stack-Development-Project/blob/main/week3_employee_api_database/client/screenshots/s3.png)

---

# 📸 Project Preview

| Dark Mode | Light Mode |
|------------|------------|
| ![](https://github.com/R-Rubab/Full-Stack-Development-Project/blob/main/week3_employee_api_database/client/screenshots/s1.png) | ![](https://github.com/R-Rubab/Full-Stack-Development-Project/blob/main/week3_employee_api_database/client/screenshots/s2.png) |

### 🔍 Search Functionality

![](https://github.com/R-Rubab/Full-Stack-Development-Project/blob/main/week3_employee_api_database/client/screenshots/s3.png)

---


# 🧪 Sample JSON

```json
{
  "name": "developer",
  "email": "dev@example.com",
  "department": "Flutter",
  "salary": 90000
}
```

---

# 📚 Concepts Used

- CRUD Operations
- REST API
- MVC Architecture
- Service Layer
- Express Middleware
- MongoDB Collections
- Mongoose Models
- Fetch API
- JavaScript DOM Manipulation
- Responsive Web Design

---

# 🎯 Learning Outcomes

Through this project, I learned:

- Building RESTful APIs
- Connecting MongoDB with Node.js
- Implementing MVC Architecture
- Creating responsive frontend interfaces
- Performing CRUD operations
- Handling API requests and responses
- Input validation and error handling
- Integrating frontend with backend

---

# 👩‍💻 Author

**Rubab**

Full Stack & Flutter Developer

GitHub:
https://github.com/R-Rubab/Full-Stack-Development-Project

---

# 📄 License

This project was created for educational purposes as part of the DecodeLabs Full Stack Development Internship.

---

