# Prince Raj Furniture House - Luxury Furniture Shop Website

A complete MERN stack project for **Prince Raj Furniture House** with a luxury wood + gold design language and 15 dedicated pages.

## Business Profile
- **Shop Name:** Prince Raj Furniture House
- **Tagline:** Crafting Wood, Creating Trust.
- **Address:** Madhopur, Chandi, Nalanda, Bihar – 803108
- **Contact:** 9472861659, 9934692659, 6206095159, 7485832166
- **Emails:** prince7485832166@gmail.com, goluraj947286@gmail.com
- **Established:** 2000
- **Owner:** Abhyanand Kumar
- **Workers:** 15

## Features Delivered
- 15 pages: Home, About Us, Services, Products, Gallery, Reviews, Contact Us, FAQ, Blog, Order, Payment, Warranty, Privacy Policy, Terms & Conditions, Dashboard
- Online order flow + payment simulation
- Review & rating system
- Contact/enquiry form
- Gallery with furniture placeholder images (wood + ply inspired)
- Blog section for furniture care tips
- Story section: _"Ye hamara dukan nahi, ye hamara sapna hai"_
- Responsive Tailwind UI with luxury styling (gold + wood texture)
- Backend REST API with Express + MongoDB
- Security baseline (Helmet, CORS, API rate limiting) for SSL-ready deployments

---

## Project Structure

```bash
prince-raj-furniture-house/
├── backend/
│   ├── src/
│   │   ├── config/db.js
│   │   ├── controllers/*.js
│   │   ├── middleware/errorHandler.js
│   │   ├── models/*.js
│   │   ├── routes/*.js
│   │   ├── utils/seedData.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/api.js
│   │   ├── components/*.jsx
│   │   ├── context/ShopContext.jsx
│   │   ├── data/siteData.js
│   │   ├── layouts/MainLayout.jsx
│   │   ├── pages/*.jsx
│   │   ├── styles/index.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
└── package.json
```

---

## Step-by-step Local Setup

### 1) Install prerequisites
- Node.js v18+
- MongoDB (local or Atlas URI)

### 2) Install dependencies
```bash
npm install
npm run install:all
```

### 3) Configure environment
```bash
cp backend/.env.example backend/.env
```
Update values if needed (especially `MONGODB_URI`).

### 4) Seed sample data
```bash
npm run seed --workspace backend
```

### 5) Run full project (frontend + backend)
```bash
npm run dev
```
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

### 6) Production build (frontend)
```bash
npm run build
```

### 7) Run backend in production mode
```bash
npm run start
```

---

## File-by-file Beginner Explanation

### Backend
- `backend/src/server.js`: Express server setup, middleware, API routes, and security basics.
- `backend/src/config/db.js`: MongoDB connection helper.
- `backend/src/models/*.js`: MongoDB schemas for Product, Review, Order, and Enquiry.
- `backend/src/controllers/*.js`: Logic for fetching and creating records.
- `backend/src/routes/*.js`: URL route definitions.
- `backend/src/utils/seedData.js`: Inserts sample products and reviews.
- `backend/src/middleware/errorHandler.js`: Handles 404 and API errors.

### Frontend
- `frontend/src/main.jsx`: App entry with router + global provider.
- `frontend/src/App.jsx`: Routing for all 15 pages.
- `frontend/src/context/ShopContext.jsx`: Loads products/reviews globally.
- `frontend/src/api/api.js`: Axios API client.
- `frontend/src/data/siteData.js`: Business info, FAQs, blogs, gallery URLs.
- `frontend/src/components/*`: Reusable UI pieces (logo, navbar, footer, titles).
- `frontend/src/layouts/MainLayout.jsx`: Shared layout wrapper.
- `frontend/src/pages/*`: Individual pages and forms.
- `frontend/src/styles/index.css`: Tailwind base styles.

---

## SSL, Privacy, and Maintenance Notes
- Project is **SSL-ready** for deployment behind HTTPS reverse proxy (Nginx/Render/Vercel + secure backend host).
- Helmet + rate limit used for baseline security.
- Privacy Policy and Terms pages included.
- For maintenance/backup readiness:
  - Schedule MongoDB backups (daily).
  - Store `.env` secrets safely.
  - Add logging/monitoring for production.

---

## Future Upgrades (Optional)
- Integrate real payment gateway (Razorpay/Stripe)
- JWT auth for admin dashboard
- Product image uploads via cloud storage
- Invoice PDF + WhatsApp notifications
