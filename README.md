## present-buddy-api
Automated presentaion under 1 minute. Using generative AI and PPTxgenJS

## Description

Provide a concise summary of what your project does and its key features.
Prerequisites

Node.js and npm (or yarn): Specify the minimum required Node.js version for compatibility.
Gemini Pro API Key: Explain how to obtain the API key and emphasize its importance.
Installation

## Clone the repository:

Bash
```git clone https://github.com/your-abdurrohit/present-buddy-api.git```

# Install dependencies:

Bash
```cd present-buddy-api | npm install```


# Set up Gemini Pro API Key:

Obtain your API key from the Gemini Pro platform.
Create a .env file in the root of your project.
Add the following line to your .env file, replacing YOUR_API_KEY and YOUR_API_SECRET with your actual credentials:
API_KEY=YOUR_API_KEY
Important: Never commit your .env file to version control (add it to your .gitignore).
Running the Project

# Start the backend API server:

Bash
```cd present-buddy-api node index.js```

# Start the frontend React app:

Bash
``cd frontend -> npm start``

Accessing the Web App

The React web app will typically be available at http://localhost:3000/. Check the frontend's package.json for any specific port configuration.
Additional Notes

# Environment Variables: 
Ensure a .env.example file is provided if you want developers to replicate your .env structure.
Security: Emphasize keeping API keys secure and out of version control.
Project Structure: Briefly outline the organization of your project files and folders.
Example README.md

Markdown
## My Gemini Project 

This project integrates a React frontend with a backend API that interacts with the Gemini Pro platform.

**Prerequisites**

* Node.js (version 14 or newer) and npm
* A Gemini Pro API key 

**Installation**

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-abdurrohit/present-buddy-api.git]```

# Install dependencies:
Bash
``cd present-buddy-api ->
npm install ``

Get your Gemini Pro API key and create a .env file (see instructions above).
Running the Project

# Start the backend server:
Bash
`node index.js`

Start the React frontend:
Bash
`cd frontend ->`
`npm start`

Accessing the Web App

The web app should be available at http://localhost:3000/.

# Important Security Note

Never commit your .env file to version control. It contains your sensitive API keys.