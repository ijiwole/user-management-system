# User Management System

This is a **User Management System** built with **Node.js, Express, Knex.js, and SQLite**. The system allows users to manage addresses and posts, providing endpoints for creating, retrieving, and managing user-related data.

## Features

- User authentication and management
- CRUD operations for addresses and posts
- SQLite database with Knex.js migrations
- API request validation with **Joi**
- Structured service layer for business logic separation

## Technologies Used

- **Node.js** (Typescript)
- **Express.js** (Web framework)
- **Knex.js** (Query builder)
- **SQLite** (Database)
- **Joi** (Request validation)
- **dotenv** (Environment variables)
- **Postman** (API testing)
- **API** (RESTFUL)

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 16 or later)
- [npm](https://www.npmjs.com/)
- SQLite3

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/ijiwole/roqqu-backend-assessment.git
   cd user-management
```   
2. Install Dependencies

```bash
 npm install
```
3. Environment Configuration
Create a `.env` file in the project root with the following variables:
```
JWT_SECRET=your_secure_jwt_secret_key
PORT=3000
```
4. Run the Application
**Development Mode**:
```bash
npm run start:dev
```

 Authentication & Authorization
- JWT tokens are required for update and delete operations
- Include the token in the `Authorization` header:
  ```
  Authorization: Bearer <your_jwt_token>
  ```

Security Features
- Secure password hashing
- JWT token-based authentication

Contact
- Project Repository: https://github.com/ijiwole/roqqu-backend-assessment