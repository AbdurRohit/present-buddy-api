# Present Buddy
Generate PowerPoint presentation in on the go using the power of Generative AI 

# Installation

## Clone the repository:


```
git clone https://github.com/your-abdurrohit/present-buddy-api.git
```

## Install dependencies:
### Backend API
```
cd server
npm install
```
### Frontend
```
cd frontend 
npm install
```

## Set up Gemini Pro API Key:

Obtain your API key from the Gemini Pro platform.
Create a .env file in the root of your project.
Add the following line to your .env file, replacing YOUR_API_KEY and YOUR_API_SECRET with your actual credentials:
```
API_KEY = YOUR_API_KEY
```
Important: Never commit your .env file to version control (add it to your .gitignore).
Running the Project

### If working on backend set api address
Change `apiResponse` address to `localhost:8080` at 
```
frontend/home.jsx
```

### Start the backend API server:

```
cd present-buddy-api 
node index.js
```

### Start the frontend React app:


```
cd frontend 
npm start
```

All set you can access the Web App on 
```
localhost:3000
```
