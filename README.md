# Smart Vibe — Full Stack E-Commerce Platform

A full-stack e-commerce platform built with modern technologies, covering product catalog management, cart & checkout, coupons, reviews, and a full admin dashboard.

## 🚀 Live Demo

Frontend: https://smartbayt-frontend-eight.vercel.app/

## 🛠️ Tech Stack

### Frontend
- **React 18 + TypeScript**
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **Shadcn/UI + Radix UI** — Component library & primitives
- **TanStack Query** — Data fetching & caching
- **React Hook Form + Zod** — Forms & validation
- **Framer Motion** — Animations
- **Axios** — HTTP client
- **Vitest** — Testing

### Backend
- **ASP.NET Core (.NET 10)** — REST API
- **Entity Framework Core** — ORM
- **PostgreSQL** — Database
- **JWT Authentication** — Secure auth
- **BCrypt** — Password hashing
- **Cloudinary** — Image hosting
- **Docker** — Containerized deployment

## ✨ Features

- 🔐 JWT Authentication (Register / Login / Forgot & Reset Password)
- 🛒 Shopping cart & wishlist
- 🏷️ Discount coupon system (percentage & fixed value)
- ⭐ Product reviews with admin approval workflow
- 📦 Order management & checkout flow
- 🛡️ Admin panel (products, categories, orders, coupons, reviews, blog, FAQs, careers, site settings)
- 🖼️ Image upload via Cloudinary
- 🌙 Dark / Light mode
- 📱 Fully responsive

## 🏗️ Architecture

```
smartbayt-frontend-main/      # Frontend (React + TypeScript)
├── src/
│   ├── api/                    # API layer (axios, auth, products, orders)
│   ├── components/
│   │   ├── admin/                # Admin panel components
│   │   ├── cart/                  # Cart components
│   │   ├── products/               # Product listing & details
│   │   ├── search/                  # Search & filters
│   │   ├── home/                     # Homepage sections
│   │   ├── layout/                    # Layout components
│   │   └── ui/                         # Reusable UI primitives
│   ├── context/                          # React context (Auth, Cart, Wishlist, Theme)
│   ├── hooks/                              # Custom React hooks
│   ├── pages/                               # Page components (incl. admin)
│   └── utils/                                # Helper utilities

SmartBayt.API/                # Backend (ASP.NET Core)
├── Controllers/                 # API endpoints (Auth, Products, Orders, and grouped resources)
├── Models/                       # Database models
├── DTOs/                          # Data transfer objects
├── Data/                            # DbContext
├── Helpers/                          # JWT helper
└── Migrations/                        # EF Core migrations
```

## 📡 API Overview

All routes are prefixed with `/api`. 52 endpoints in total.

| Resource | Base route | Notes |
|---|---|---|
| Auth | `/api/auth` | register, login, me, profile, forgot/reset password |
| Products | `/api/products` | CRUD, `GET /slug/{slug}` for SEO-friendly lookup |
| Categories | `/api/categories` | CRUD |
| Orders | `/api/orders` | place order, `GET /my`, admin status updates |
| Reviews | `/api/reviews` | create, list, admin approve/delete |
| Coupons | `/api/coupons` | CRUD for discount codes |
| FAQs | `/api/faqs` | CRUD |
| Blog | `/api/blog` | CRUD |
| Jobs | `/api/jobs` | careers/job postings CRUD |
| Settings | `/api/settings` | site-wide configuration |
| Contact | `/api/contact` | contact form submissions |
| Dashboard | `/api/dashboard` | admin store metrics |
| Upload | `/api/upload` | Cloudinary image upload |

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- .NET 10 SDK
- PostgreSQL 17

### Backend Setup

```bash
cd SmartBayt.API
```

Set the following environment variables (or update `appsettings.json` directly):

| Variable | Description |
|---|---|
| `ConnectionStrings__DefaultConnection` (or `DATABASE_URL`) | PostgreSQL connection string |
| `JWT_SECRET` | Secret key used to sign JWTs (**required**) |
| `FRONTEND_URL` | Allowed CORS origin for the frontend |

```bash
dotnet ef database update
dotnet run
```

**Or with Docker:**
```bash
docker build -t smart-vibe-api .
docker run -p 8080:8080 \
  -e ConnectionStrings__DefaultConnection="<your-connection-string>" \
  -e JWT_SECRET="<your-secret>" \
  smart-vibe-api
```

### Frontend Setup

```bash
cd smartbayt-frontend-main
npm install
```

Create a `.env` file:

| Variable | Description |
|---|---|
| `VITE_API_URL` | Base URL of the backend API (e.g. `http://localhost:5000`) |

```bash
npm run dev
```

## 📊 Database Schema

- **Users** — Authentication & profiles
- **Products** — Product catalog
- **Categories** — Product categorization
- **Orders** — Order records & items
- **Reviews** — Product reviews (with approval status)
- **Coupons** — Discount codes
- **Blog / FAQs / Jobs** — Site content
- **Site Settings / Contact Messages** — Store configuration & inquiries

## 📝 Notes

- Images are uploaded and served via Cloudinary
- Frontend deployed on Vercel, backend + database on Railway

## 👨‍💻 Developer

Built by **[Mohamed Elsayed](https://github.com/Mohamed-Elsayedd1)** as a portfolio project showcasing full-stack development skills.
