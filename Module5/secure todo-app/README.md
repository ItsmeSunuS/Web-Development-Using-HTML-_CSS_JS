## Secure TODO App

### Tech Stack
Node.js, Express, Supabase, JWT, bcrypt

### Setup
npm install  
npm run dev  

### Auth
Signup → Login → Get JWT → Use as:
Authorization: Bearer <token>

### Protected Routes
All /todos routes require JWT
