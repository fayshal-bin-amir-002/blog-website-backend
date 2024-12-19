# BlogSphere

A modern blogging platform that allows users to share their thoughts, stories, and ideas with the world. With features like user authentication, rich content management, and publication tools, BlogSphere makes writing and sharing easy and efficient.

## 🌐 Live Demo

[Visit BlogSphere](https://blog-website-backend-rho.vercel.app/)

---

## ✨ Features

- **User Authentication**: Secure login and registration system.
- **Rich Content Management**: Write and manage blogs with ease.
- **Role-Based Access Control**: Admins have additional privileges to manage content.
- **Blog Publishing**: Publish or save drafts for later.

---

## 🚀 Technologies Used

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: Zod

---

## 📖 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js (v16+)
- MongoDB

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/fayshal-bin-amir-002/blog-website-backend.git
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**:

- Create a .env file in the root directory and configure the following variables:

```bash
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/doodle-shop
```

4. **Run the Application**:

- Development Mode:

```bash
npm run start:dev
```

- Production Mode:

```bash
npm run build
npm run start:prod
```

5. **Lint and Format Code**:

- Check for linting issues:

```bash
npm run lint
```

- Fix linting issues:

```bash
npm run lint:fix
```

- Format code:

```bash
npm run format
```

## **API Endpoints**

### **Authentication**

- `POST /api/auth/register`  
  For register a new user.

- `POST /api/auth/login`  
  For login a user.

---

### **Blog Management**

- `POST /api/blogs`  
  Create a blog.

- `PATCH /api/blogs/:id`  
  Update a blog.

- `DELETE /api/blogs/:id`  
  DELETE a blog.

- `GET /api/blogs`  
  Get all blog.

- `GET /api/blogs?search=technology&sortBy=createdAt&sortOrder=desc&filter=60b8f42f9c2a3c9b7cbd4f18`  
  Get all blog with search, sortBy , sortOrder and author id query.

---

### **Admin Actions**

- `PATCH /api/admin/users/:userId/block`  
  Blocked a user by admin.

- `DELETE /api/admin/blogs/:id`  
  Delete a blog by admin.
