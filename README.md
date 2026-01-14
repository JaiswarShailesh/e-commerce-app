## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

# Product Explorer Dashboard

A production-style frontend application built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
The project demonstrates clean component architecture, client–server separation, state management, and responsive UI design.

---

## 🛠 Tech Stack

- **Next.js (App Router)** – Server & Client Components
- **TypeScript** – Strict typing
- **Tailwind CSS** – Utility-first styling
- **Fake Store API** – Public product API

---

## 📦 Features

### Core Features
- Product listing with responsive grid layout
- Server-side data fetching using Server Components
- Search products by title (client-side)
- Filter products by category
- Product details page using dynamic routing (`/products/[id]`)
- Favorites feature with persistence using `localStorage`
- Loading skeletons and error handling
- Mobile-first responsive design

### Bonus Features
- Sorting by price (Low → High, High → Low)
- Client-side pagination
- Dark mode toggle
- Basic accessibility (ARIA labels, keyboard-friendly controls)

---

## 🧱 Architecture Overview

### Server Components
- Used for data fetching and SEO-relevant content
- Improves initial load performance and reduces client bundle size

### Client Components
- Used for interactivity:
  - Search
  - Filters
  - Favorites
  - Sorting
  - Pagination

### State Management
- React Context for global UI state (Favorites, Theme)
- `localStorage` used only for persistence
- No external state libraries (Redux/Zustand) to avoid unnecessary complexity

---

## 📁 Folder Structure

```txt
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                # Product listing (Server Component)
│   ├── products/
│   │   └── [id]/
│   │       └── page.tsx        # Product details (Server Component)
│
├── components/
│   ├── ProductCard.tsx
│   ├── ProductSkeleton.tsx
│   ├── FavoritesToggle.tsx
│
├── context/
│   ├── FavoritesContext.tsx
│   ├── ThemeContext.tsx
│
├── hooks/
│   └── useFavorites.ts
│
├── lib/
│   └── api.ts
│
├── types/
│   └── product.ts
│
├── utils/
│   └── filterProducts.ts
│
└── __tests__/
    └── filterProducts.test.ts

### Environment Variables

Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_API_BASE_URL=https://fakestoreapi.com

## Setup
```bash
npm install
npm run dev



