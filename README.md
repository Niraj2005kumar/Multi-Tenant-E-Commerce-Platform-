# My Project
# MultiShop - Vendor First E-Commerce Marketplace

MultiShop is a modern vendor-first e-commerce marketplace frontend project built using React, TypeScript, TanStack Router, and Tailwind CSS.

In this platform, customers and vendors have separate authentication flows. Customers can register, login, browse shops, view products, add products to cart, and purchase items. Vendors can register their shop, login, access their vendor dashboard, add products, and manage their selling activity.

---

## Project Overview

This project is designed as a marketplace where the homepage does not directly show products first. Instead, it shows available vendors/shops first.

Example shops:

- Sharma Electronics
- Gupta Kirana
- Fashion Hub
- Mobile World

When a customer clicks on a vendor/shop, only that vendor's products are displayed.

---

## Main Features

### Customer Features

- Customer registration
- Customer login
- Protected customer routes
- Browse active vendors/shops
- View products of selected vendor
- Add products to cart
- Checkout flow
- Orders page
- Profile page
- Wishlist page

### Vendor Features

- Separate vendor login page
- Separate vendor shop registration page
- Vendor dashboard
- Add new products
- View/manage own products
- View vendor orders
- Vendor analytics page
- Products linked with vendor ID

### Authentication Flow

- User must login before accessing the website.
- New customers must register first and then login.
- New vendors must register their shop first and then login.
- Customer and vendor login/register pages are separate.
- Login state is handled using localStorage for frontend-only demo purpose.

---

## Project Flow

### Customer Flow

```txt
Customer opens website
        ↓
Redirected to Login Page
        ↓
New customer registers
        ↓
Customer logs in
        ↓
Customer sees active vendors/shops
        ↓
Customer clicks a shop
        ↓
Customer sees products of that shop
        ↓
Customer adds product to cart
        ↓
Customer checkout/buys product
