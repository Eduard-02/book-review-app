# Book Review App

MERN project where readers share short book reviews. The repo includes a React Native client (Expo) and an Express/MongoDB API.

## What It Does
- Email/password onboarding with avatars.
- Create, browse, and manage book reviews with cover art and ratings.
- Cloudinary stores images; JWT keeps sessions secure.

## Tech Used
- Frontend: React Native (Expo Router), Zustand, AsyncStorage.
- Backend: Node.js, Express, MongoDB, JWT, Cloudinary.

## Folder Map
book-review-app/
├── mobile/ # Expo app
└── backend/ # REST API


## Quick Start
1. Clone the repo.
2. Install dependencies in each folder:
   ```bash
   cd backend && npm install
   cd ../mobile && npm install

1. Set environment variables:
- backend/.env: MONGO_URI, JWT_SECRET, CLOUDINARY_*, PORT=5000.
- mobile/app.json (or .env): apiUrl pointing to the backend, e.g. http://localhost:5000.

2. Run both services:
	```bash
	# Backend
	cd backend
	npm run dev

	# Mobile (new terminal)
	cd mobile
	npm run start   # or npm run ios / android

## About Me

I’m **Eduardo Cebola**, a Software Developer focused on web and mobile development. Currently seeking Junior / Intern opportunities. <br>
<br>
Let's stay in touch! Feel free to connect with me:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/eduardo-cebola)
