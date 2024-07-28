# Present Z
## Generate PowerPoint presentations on the go using the power of Generative AI 
### Take input from the user
##### Provide as many details as possible on the topic/subject. Click on generate PPT. 
![image](https://github.com/AbdurRohit/present-buddy-api/assets/96853180/b4998016-10b4-4851-9d45-85a1770138a9)
### Open the PPT 
##### This will trigger the Backend, and the PPT will be downloaded within 10-15 seconds.
![image](https://github.com/AbdurRohit/present-buddy-api/assets/96853180/8707a219-c2a2-4ec8-8935-318e888a7496)
### Edit it as per requirements
![image](https://github.com/AbdurRohit/present-buddy-api/assets/96853180/6263d7d6-5bcc-49c2-97da-c8dfce88e25b)


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
cd front-end 
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

### If working on the backend set API address
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
