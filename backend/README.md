```markdown
# Book Review API

Express + MongoDB service that powers the Book Review mobile app.

## Highlights
- Email/password auth with bcrypt and JWT.
- CRUD endpoints for book reviews (title, caption, rating, image).
- Cloudinary image upload and cleanup on delete.
- Optional cron job to ping the API and keep free hosts awake.

## Requirements
- Node.js 20+
- MongoDB connection URI (Atlas or local)
- Cloudinary account (cloud name, API key/secret)

## Setup
```bash
cd backend
npm install
```
Create **.env** in the same folder:
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<random-string>
CLOUDINARY_CLOUD_NAME=<value>
CLOUDINARY_API_KEY=<value>
CLOUDINARY_API_SECRET=<value>
API_URL=http://localhost:5000/api   # Used by the cron keep-alive job

## Run
```bash
npm run dev #Starts Express via Nodemon
```

The mobile app expects the API at **/api**, e.g. **http://localhost:5000/api**.