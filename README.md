# SmartBayt Frontend 🛍️

A modern, fully-featured **e-commerce storefront** built with **React 18**, **TypeScript**, and **Tailwind CSS** — complete with a powerful Admin Dashboard.

> 🔗 Powered by [SmartBayt API](https://github.com/t9amw0rk-sys/smartbayt-api)

---

## ✨ Features

### 🛒 Customer Side
- 🏠 **Home Page** — Hero section, featured products, categories showcase
- 🛍️ **Shop** — Browse, filter, and search products
- 📄 **Product Detail** — Image gallery, reviews, quick add to cart
- ❤️ **Wishlist** — Save products for later
- 🛒 **Cart & Checkout** — Full cart management with order confirmation
- 👤 **User Profile** — Update info and view order history
- 🔐 **Auth** — Login, Register, Forgot/Reset Password

### 🔧 Admin Dashboard
- 📊 **Dashboard** — Overview stats and analytics
- 📦 **Products** — Full CRUD with image upload
- 🗂️ **Categories** — Manage product categories
- 📋 **Orders** — Track and manage customer orders
- 👥 **Customers** — View registered users
- 🎟️ **Coupons** — Discount code management
- ⭐ **Reviews** — Moderate product reviews
- ❓ **FAQs** — Manage frequently asked questions
- 📝 **Blog** — Content management
- 💼 **Jobs** — Job listings management
- ⚙️ **Settings** — App configuration

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| State Management | TanStack Query (React Query) |
| Routing | React Router DOM v7 |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion |
| HTTP Client | Axios |
| Icons | Lucide React |
| Charts | Recharts |
| Theme | next-themes (Dark/Light mode) |
| Testing | Vitest + Testing Library |

---

## 📁 Project Structure

```
src/
├── api/                    # API layer (Axios calls)
│   ├── client.ts           # Axios instance with interceptors
│   ├── auth.ts             # Auth endpoints
│   ├── products.ts         # Products endpoints
│   ├── orders.ts           # Orders endpoints
│   ├── categories.ts       # Categories endpoints
│   └── other.ts            # Reviews, FAQs, etc.
├── components/
│   ├── admin/              # Admin layout & protected routes
│   ├── cart/               # Cart drawer
│   ├── home/               # Hero, Featured Products, Categories
│   ├── layout/             # Navbar & Footer
│   ├── products/           # Product card & quick view
│   ├── search/             # Search modal
│   └── ui/                 # shadcn/ui components
├── context/
│   ├── AuthContext.tsx     # Authentication state
│   ├── CartContext.tsx     # Shopping cart state
│   ├── WishlistContext.tsx # Wishlist state
│   └── ThemeContext.tsx    # Dark/Light mode
├── pages/
│   ├── Home.tsx
│   ├── Shop.tsx
│   ├── ProductDetail.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Wishlist.tsx
│   ├── Profile.tsx
│   ├── Login.tsx / Register.tsx
│   └── admin/              # All admin pages
└── App.tsx                 # Routes & providers
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org/)
- [SmartBayt API](https://github.com/t9amw0rk-sys/smartbayt-api) running locally or deployed

### 1. Clone the repository

```bash
git clone https://github.com/t9amw0rk-sys/smartbayt-frontend.git
cd smartbayt-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_API_URL=http://localhost:5000
```

### 4. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

---

## 🌐 Deployment

### Build for production

```bash
npm run build
```

Output will be in the `dist/` folder — deploy to **Vercel**, **Netlify**, or any static hosting.

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Set the environment variable `VITE_API_URL` in your Vercel project settings.

---

## 🔗 Related

- **Backend API** → [smartbayt-api](https://github.com/t9amw0rk-sys/smartbayt-api)

---

## 📄 License

This project is licensed under the MIT License.
