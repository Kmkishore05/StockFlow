# 🛒 StockFlow - Smart Inventory Management System

StockFlow is a full-stack inventory management system built using **Spring Boot** and **React (Vite + Tailwind CSS)**.  
It allows users to manage products, track inventory levels, and visualize data using charts.

---
📌 Important:
- The **inventory/** folder contains all backend code (Spring Boot APIs, controllers, services, database logic)
- The Other folder contains the React frontend UI

---

## ✨ Features

### 🔹 Backend (Spring Boot)
- REST APIs for Product Management (CRUD)
- Search functionality
- Pagination and sorting
- DTO pattern for clean data transfer
- Global exception handling
- MySQL database integration

### 🔹 Frontend (React)
- Modern UI with Tailwind CSS
- Product listing with images
- Search functionality
- Pagination
- Add / Edit / Delete products
- Dashboard with charts (Bar + Pie)
- Responsive UI

---

## 🛠️ Tech Stack

Backend:
- Java
- Spring Boot
- Spring Data JPA
- MySQL

Frontend:
- React (Vite)
- Tailwind CSS (v4)
- Axios
- Recharts

---

## ⚙️ Backend Setup

1. Navigate to backend folder:
cd inventory

2. Configure database in:
src/main/resources/application.properties

Add:

spring.datasource.url=jdbc:mysql://localhost:3306/inventory_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

3. Run backend:
mvn spring-boot:run

Backend runs at:
http://localhost:8080

---

## 🎨 Frontend Setup

1. Navigate to frontend folder:
cd inventory-frontend

2. Install dependencies:
npm install

3. Run frontend:
npm run dev

Frontend runs at:
http://localhost:5173

---

## 🔗 API Endpoints

GET     /api/products              → Get all products  
GET     /api/products/paginated    → Pagination  
GET     /api/products/search       → Search products  
POST    /api/products              → Add product  
PUT     /api/products/{id}         → Update product  
DELETE  /api/products/{id}         → Delete product  

---

## 📊 Dashboard Features

- Bar Chart → Product category distribution  
- Pie Chart → Stock status (Low vs In Stock)  
- Total Products count  
- Low Stock detection  

---

## 🧠 Architecture

Frontend (React)
   ↓
Service Layer (Axios API)
   ↓
Backend (Spring Boot REST APIs)
   ↓
Database (MySQL)

---

## 📁 Key Concepts Used

- REST API development  
- DTO (Data Transfer Object)  
- Pagination & Sorting  
- Search functionality  
- Service layer architecture  
- React state management  
- Component-based UI  
- Axios API integration  
- Data visualization  

---

## 👨‍💻 Author

Kishore K M

---

## ⭐ Future Improvements

- JWT Authentication  
- Role-based access  
- Cloud deployment  
- Advanced analytics  
- Export reports  

---
