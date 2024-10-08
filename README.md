# Trainwise - Fitness Trainer Appointment Booking Application

Trainwise is a comprehensive fitness trainer appointment booking platform. Users can browse through a list of trainers categorized by specialties, book appointments by selecting available time slots, and make payments. The application also provides users with the ability to create and manage their profiles. It is built using **React.js** for the frontend, with **Firebase** handling authentication and database functionalities.

## Live Application 

[Live Demo](https://66f182c3f20b6d2dca80977d--voluble-monstera-d9d2dd.netlify.app/)

![Demo Video](./DEMO%20and%20Screenshots/fitnesstrainer.mp4)

## Features

- **User Registration & Authentication**: Users can register, log in, and manage their accounts using Firebase authentication.
- **Trainer List with Categories**: Trainers are listed and filtered based on categories like strength, yoga, or cardio. Users can view specific trainers and related trainers of the same category.
- **Appointment Booking**: Users can select a trainer, choose available time slots, and proceed with payment.
- **Profile Management**: Users can create and update their profiles.
- **Responsive Design**: Fully responsive design across all screen sizes using **Tailwind CSS**.
- **Lazy Loading & Smooth Scrolling**: Lazy loading of images and smooth scroll for a seamless user experience.
- **Routing with React Router**: Navigation between pages and trainer profiles with specific IDs.
- **Error Handling & Notifications**: Toast notifications for success and error messages.
  
## Tech Stack

- **Frontend:**
  - React.js
  - Vite (for fast development)
  - Tailwind CSS (for styling)
  - Firebase (for authentication, database, and cloud functions)
  - Toast Notifications (for user feedback)
  - React Router (for page routing)

## Screen Shots

![Home Page](./DEMO%20and%20Screenshots/Home.png)
![Trainers Page](./DEMO%20and%20Screenshots/all%20trainers.png)
![Book Appointments Page](./DEMO%20and%20Screenshots/book%20apoointment.png)
![Appointments Page](./DEMO%20and%20Screenshots/appointment.png)
![Profile Page](./DEMO%20and%20Screenshots/profile.png)
![Register Page](./DEMO%20and%20Screenshots/register.png)

## Table of Contents

1. [Installation](#installation)
2. [Environment Variables](#environment-variables)
3. [Running the Application](#running-the-application)
4. [Application Overview](#application-overview)
5. [Project Structure](#project-structure)
6. [License](#license)

---

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14.x or higher)
- **npm** or **yarn**
- Firebase Account

### Clone the Repository

cd trainwise-fitness

### Install Dependencies

npm install
# or
yarn install


## Environment Variables

To connect your app to Firebase, add a `.env` file in the root directory with the following keys:

VITE_REAL_TIME_DATABASE=your_firebase_database_url


## Running the Application

### Development Server

npm run dev
# or
yarn dev

The app will be available at `http://localhost:3000`.

### Build for Production

To build the app for production, run:

npm run build
# or
yarn build

## Application Overview

### User Registration & Authentication

- Users can sign up, log in, and manage their profiles using Firebase authentication.
- After login, users can view a list of trainers based on categories like strength, yoga, etc.

### Trainer Selection & Appointment Booking

- Users can filter and select a trainer based on specialty.
- Upon selecting a trainer, users are presented with a profile page showing the trainer's details and related trainers in the same category.
- Appointments can be made by selecting available time slots and completing the payment process.

### Profile Management

- Users can create and edit their profiles, updating information such as their name, email, and profile photo.

### Routing and Navigation

- The app uses React Router for seamless navigation between pages and trainer profiles. Lazy loading of images ensures faster loading times.

### Error Handling and Notifications

- **Toast notifications** are used for providing feedback, such as errors or successful bookings.
- Error handling is implemented for network requests and user actions.

### Fully Responsive & Smooth Experience

- **Responsive UI** ensures optimal performance across desktop, tablet, and mobile devices.
- **Smooth scrolling** and lazy loading of images for better user experience.


## Project Structure

```bash
trainwise-fitness/
├── src/
│   ├── assets/                # Images and assets
│   │   └── assets.js          # Array of objects storing image and asset data
│   ├── components/            # Reusable components
│   │   ├── Banner.jsx         # Home page banner
│   │   ├── Footer.jsx         # Footer component
│   │   ├── Header.jsx         # Header component
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── RelatedTrainers.jsx# Related trainers component
│   │   ├── SpecialityMenu.jsx # Trainer categories filter
│   │   └── TopTrainers.jsx    # Display of top trainers
│   ├── context/
│   │   └── AppContext.jsx     # Global state management (context API)
│   ├── pages/                 # Application pages
│   │   ├── About.jsx          # About page
│   │   ├── Appointment.jsx    # Appointment booking page
│   │   ├── Contact.jsx        # Contact page
│   │   ├── Home.jsx           # Home page
│   │   ├── Login.jsx          # User login/sign up page
│   │   ├── MyAppointments.jsx # User's appointment history page
│   │   ├── MyProfile.jsx      # User profile management page
│   │   └── Trainer.jsx        # Trainer profile and appointment booking page
│   ├── App.jsx                # Main App component
│   ├── main.jsx               # React entry point (Vite specific)
├── .env                       # Environment variables for Firebase keys
├── package.json               # Project dependencies and scripts
├── README.md                  # Project documentation
└── vite.config.js             # Vite configuration
```

## License

This project is licensed under the MIT License.

