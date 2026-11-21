# 📦 Inventory Management System

A RESTful backend application developed for **Assignment 3 – Web Development III (Unit 3)** using Node.js, Express.js, MongoDB, Mongoose, and dotenv.

The system provides APIs for product management, inventory tracking, stock operations, filtering, sorting, pagination, and inventory reports.

## 🚀 Features

- Create, retrieve, update, and delete products (CRUD)
- Product schema validation
- Unique SKU validation
- Search products by name
- Filter products by category and price
- Sort product records
- Pagination support
- Restock products
- Record sales and update stock
- Prevent stock from becoming negative during sales
- Generate low-stock reports
- Generate category-wise inventory summaries
- Centralized error handling
- JSON-based REST API responses

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | NoSQL database |
| Mongoose | Database modeling and validation |
| dotenv | Environment variable management |
| Postman | API testing |

## 📁 Project Structure

```text
inventory-management-system/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── screenshots/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js 18 or later
- MongoDB running locally or MongoDB Atlas
- npm

### 1. Clone the repository

```bash
git clone https://github.com/pratikbiru2006-dot/webdev-assignment3.git
```

### 2. Navigate to the project

```bash
cd webdev-assignment3
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root directory and add your configuration:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/inventory_management
LOW_STOCK_THRESHOLD=5
```

For MongoDB Atlas, replace the local MongoDB URI with your Atlas connection string.

### 5. Start the development server

```bash
npm run dev
```

### 6. Access the API

```text
http://localhost:5000
```

## 📡 API Endpoints

### Products

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Retrieve products (supports filtering, sorting, and pagination) |
| GET | `/api/products/:id` | Retrieve a product by ID |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |
| PATCH | `/api/products/:id/stock` | Adjust product stock |

### Reports

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products/reports/low-stock` | Retrieve low-stock products |
| GET | `/api/products/reports/category-summary` | Retrieve category-wise inventory summary |

## 📦 Product Schema

| Field | Description |
|---|---|
| `name` | Required string, 2–100 characters |
| `description` | Optional string, maximum 500 characters |
| `category` | Required string |
| `price` | Required number, minimum 0 |
| `quantity` | Required non-negative whole number |
| `sku` | Required unique string, stored uppercase |
| `supplier` | Optional string |
| `createdAt` | Automatically generated timestamp |
| `updatedAt` | Automatically generated timestamp |

## 🔎 Querying, Filtering & Pagination

The products endpoint supports relevant query parameters such as category, price filters, search, sorting, and pagination.

Examples:

```http
GET /api/products
GET /api/products?category=Electronics
GET /api/products?search=mouse
GET /api/products?page=1&limit=10
```

> Check the route/controller implementation for the exact query parameter names supported by your current version.

## 🧪 Testing

Test the API endpoints using **Postman** or **Thunder Client**.

Example request:

```bash
curl http://localhost:5000/api/products
```

## 🎯 Learning Objectives

This project demonstrates:

- REST API development
- CRUD operations
- Express routing and middleware
- MongoDB integration with Mongoose
- Data validation
- Stock and inventory logic
- Filtering, sorting, and pagination
- Error handling
- Environment-based configuration

## 👨‍💻 Author

**Pratik Kumar Singh**

GitHub: [@pratikbiru2006-dot](https://github.com/pratikbiru2006-dot)

Repository: [webdev-assignment3](https://github.com/pratikbiru2006-dot/webdev-assignment3)

## 📄 License

This project was created for educational purposes as part of a Web Development assignment.
