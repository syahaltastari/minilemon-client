# 🍋 Minilemon App

Minilemon App is a modern, full-stack web application designed for managing users and organizational departments efficiently. Built with **Next.js 15** and **Express.js + Sequelize**, it follows real-world project structures, clean code practices, and modern authentication strategies.

---

## Tech Stack

- **Frontend**: Next.js 15, React, TailwindCSS, Formik, React Hot Toast
- **Backend**: Express.js, Sequelize (PostgreSQL or MySQL), JWT Auth
- **Deployment**: Railway
- **Version Control**: Git + GitHub

---

## How to Run Project Locally

> Make sure you have **Node.js**, **npm/yarn**, **MySQL** installed.

### 1. Clone the Repositories

```bash
# Clone frontend
git clone https://github.com/yourusername/minilemon-client.git
cd minilemon-client

# Clone backend
git clone https://github.com/yourusername/minilemon-server.git
cd minilemon-server
```

### 2. Setup Backend

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure your `.env` file:

   ```env
   PORT=5000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_secret_key
   ```

   Or you can rename .env.example to .env and fill the variable. 

3. Run migrations:

   ```bash
   npx sequelize-cli db:migrate
   ```

4. Start the backend:
   ```bash
   npm run dev
   ```

### 3. Setup Frontend

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure your `.env.local`:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```
   Or you can rename .env.example to .env.local and fill the variable. 
3. Run the development server:
   ```bash
   npm run dev
   ```

---

## How to Deploy

### Deploy on Railway

1. Go to [https://railway.app](https://railway.app) and connect your GitHub repositories.
2. Deploy both the **client** and **server** repos separately.
3. Set environment variables in each project’s settings:

   - For **server**: `DATABASE_URL`, `JWT_SECRET`, etc.
   - For **client**: `NEXT_PUBLIC_API_URL=https://your-server.up.railway.app`

4. Set custom domains or use Railway’s default:
   - `minilemon-app.up.railway.app`
   - `minilemon-api.up.railway.app`

> Ensure your backend is configured to allow CORS and uses `app.set("trust proxy", 1)` for cookie-based auth in production.

---

## 🧩 Features

### Authentication

- Secure login system using JWT
- Protected routes for authenticated users
- Formik + Yup validation with error handling

### User Management

- Add, update, and delete users
- Search, filter, and toggle active status
- Reuse modal for Add/Edit actions

### Responsive Design

- Fully responsive with TailwindCSS
- Clean, minimal UI

---

## 📎 Project Structure (Client & Server)

Each repository follows best practices with modular architecture, making the codebase easy to scale and maintain.

---

## 🧑‍💻 Contributing

This is a solo-built project, but PRs and suggestions are welcome!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
