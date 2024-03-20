# Present Buddy
Generate PowerPoint presentation in on the go using the power of Generative AI.
This is a desktop application designed to made the process of making power Point Slides easy and on the go.The app allows users to input the topic of thetr choices or even can chose files from device storage anf generate relavent presentation out of it.

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
## Features

a landing page with information about the app.
#first image 
- A form where topics and files can be entered.
#second image 

PowerPoint slides are created based on input.
#image3

- The PowerPoint presentations that have been prepared are shown.
#image4

## Technologies Used

- HTML, CSS, JavaScript, and [Gemini Pro API for making PowerPoint slides]

## Use

1. To access the app, use the landing page.
2. Fill out the form with the topic entered or upload a file.
3. Press the "Generate PPT" button, so that the PowerPoint slides can be made.
4. Inspect, store, or disperse
