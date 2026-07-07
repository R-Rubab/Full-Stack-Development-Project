# 🚀 Employee Management System

A Full Stack Employee Management System developed using **Node.js, Express.js, MongoDB, and Vanilla JavaScript**. This project was built during the **DecodeLabs Full Stack Development Internship** and follows a clean **MVC Architecture** with a responsive frontend and RESTful backend APIs.

---

## 📖 Project Overview

The Employee Management System helps manage employee records efficiently. It allows users to create, view, update, delete, and search employee information through a user-friendly web interface.

The backend is built with Node.js and Express.js, while MongoDB is used as the database. The frontend communicates with the backend using the Fetch API.

---

## ✨ Features

### Backend

* RESTful API Development
* MVC Architecture
* Service Layer
* MongoDB Integration
* Mongoose Models
* CRUD Operations
* Input Validation
* Centralized Error Handling
* Environment Variables using `.env`

### Frontend

* Responsive User Interface
* Add Employee
* View Employee List
* Update Employee
* Delete Employee
* Search Employee
* Dashboard Cards
* Department Statistics
* Loading Indicator
* Toast Notifications
* Confirmation Before Delete

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Development Tools

* Visual Studio Code
* Thunder Client
* Git
* GitHub

---

# 📂 Project Structure

```
Employee-Management-System
│
├── client
│   │
│   ├── index.html
│   ├── css
│   │     ├── style.css
│   │     ├── dashboard.css
│   │     └── sidebar.css
│   │
│   ├── js
│   │     ├── app.js
│   │     ├── api.js
│   │     ├── dashboard.js
│   │     ├── theme.js
│   │     └── export.js
│   │
│   └── assets
│
├── server
│   │
│   ├── config
│   │     └── db.js
│   │
│   ├── controllers
│   │     └── employeeController.js
│   │
│   ├── middleware
│   │     └── errorHandler.js
│   │
│   ├── models
│   │     └── Employee.js
│   │
│   ├── routes
│   │     └── employeeRoutes.js
│   │
│   ├── services
│   │     └── employeeService.js
│   │
│   ├── validators
│   │     └── employeeValidator.js
│   │
│   ├── utils
│   │
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/R-Rubab/Full-Stack-Development-Project/blob/main/week3_employee_api_database
```

---

## 2. Navigate to the Project

```bash
cd Employee-Management-System
```

---

## 3. Install Backend Dependencies

```bash
cd server
npm install
```

---

## 4. Create Environment File

Create a `.env` file inside the **server** folder.

```
PORT=5001

MONGO_URI=mongodb://127.0.0.1:27017/employee_management
```

---

## 5. Start the Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:5001
```

---

## 6. Run the Frontend

Open the **client** folder in Visual Studio Code.

Install the **Live Server** extension and open:

```
index.html
```

---

# 📡 REST API Endpoints

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| GET    | /api/employees     | Get all employees  |
| GET    | /api/employees/:id | Get employee by ID |
| POST   | /api/employees     | Create employee    |
| PUT    | /api/employees/:id | Update employee    |
| DELETE | /api/employees/:id | Delete employee    |

---

# 🧪 Sample Request

```json
{
    "name": "Rubab",
    "email": "rubab@gmail.com",
    "department": "Flutter",
    "salary": 90000
}
```

---

# 📚 Concepts Implemented

* REST API Development
* CRUD Operations
* MVC Architecture
* Service Layer Pattern
* Express Middleware
* MongoDB Database
* Mongoose ODM
* Fetch API
* JavaScript DOM Manipulation
* Responsive Design
* Error Handling
* Input Validation

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



---

# 🚀 Future Improvements

* JWT Authentication
* User Login & Registration
* Role-Based Authorization
* Pagination
* Advanced Search & Filters
* Export to PDF
* Deploy Backend on Render
* Deploy Frontend on Netlify/Vercel

---

# 👩‍💻 Author

**Rubab**

Computer Science Graduate | Flutter & Full Stack Developer

GitHub: https://github.com/R-Rubab/Full-Stack-Development-Project


---

# 📄 License

This project was developed for educational purposes as part of the **DecodeLabs Full Stack Development Internship**.

---

