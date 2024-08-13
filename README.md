LIVE: https://react-form-frontend.vercel.app/
# Overview
This repository contains the frontend application for [Your Project Name]. It is built using React with Vite as the build tool. The application includes login, signup, and blog pages, and interacts with the backend API hosted on [your backend URL].

## Features
1. Login page for user authentication
2. Signup page for new user registration
3. Blog page to display different blog content
4. Responsive design for a seamless experience across devices

# Getting Started
## Prerequisites
- Node.js (v14.x or later)
- npm (Node Package Manager)
## Installation
1. Clone the repository:
```
git clone https://github.com/professorSergio12/React-form-frontend.git
```
2. Install dependencies:
```
npm install
```
3. Start the development server:
```
npm run dev
```
The application will be available at http://localhost:3000 by default.

## Deployment
### Steps to Deploy
1. Log In to Vercel:
- Visit Vercel and log in using your GitHub account. You can sign up for free if you don’t have a Vercel account yet.

2. Connect Your GitHub Repository:
- After logging in, go to the Vercel dashboard.
- Click on the “New Project” button.
- Vercel will prompt you to connect your GitHub account if it’s not already connected.
- Once connected, you’ll see a list of your GitHub repositories. Select the repository that contains your Vite + React project.
  
3. Configure Deployment Settings:
- Vercel will automatically detect that your project uses Vite and configure the build settings accordingly. However, you can review and adjust settings if needed.
- You can set environment variables required by your application. To do this:
- Click on the "Settings" tab for your project.
- Now you have to set this "http://your-backend-url.com/api" server link to where you are calling the fetch request.
- 
4. Deploy Your Application:
- Once your settings are configured, click the “Deploy” button.
- Vercel will start building and deploying your project. You can monitor the deployment status on the Vercel dashboard.
- After deployment, Vercel will provide you with a URL where your application is live.

## Acknowledgments
- React for the frontend framework
- Vite for the build tool
- Vercel for deployment
