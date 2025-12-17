🛒 E-Commerce Product Browser

A modern React + Vite e-commerce product browser that consumes the Fake Store API, featuring category filtering, search, product details modal, and a fully functional shopping cart with persistence.

This project was built to demonstrate clean React architecture, custom hooks, and real-world UI/UX patterns.

🚀 Live Features

Product listing from external API

Filter products by category

Search products by title

Product details modal (fetched by ID)

Shopping cart:

Add / remove items

Quantity increase / decrease

Subtotal calculation

Cart persistence using localStorage

Responsive UI with Tailwind CSS

UX polish:

Loading states

Empty states

Toast notifications

Close modals with ESC / outside click

🧱 Tech Stack

Frontend: React (Vite)

Styling: Tailwind CSS

State Management: React Hooks + Custom Hooks

API: Fake Store API

src/
├── api/
│   └── productsApi.js        # All API calls (separation of concerns)
│
├── hooks/
│   ├── useProducts.js        # Products, categories, search, filtering
│   └── useCart.js            # Cart logic (add/remove/qty/subtotal)
│
├── components/
│   ├── ProductGrid.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetails.jsx
│   ├── CartDrawer.jsx
│   ├── CartItem.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   └── StatusMessage.jsx     # Toast notifications
│
├── utils/
│   └── formatCurrency.js
│
├── App.jsx
└── main.jsx

🧠 Key Learnings & Concepts Used

Separation of concerns (API / logic / UI)

Custom React hooks for state management

Controlled components for search & filters

Conditional rendering for UX states

Reusable, composable components

Real-world cart logic (merge quantities, persistence)

Clean Tailwind utility-first styling

👤 Author
Yaqoob Ahmed
Frontend / Full-Stack Developer
Built as a hands-on project to strengthen React fundamentals and real-world application structure.

Persistence: Browser localStorage

Build Tool: Vite
