# Book Store Website

A full-stack web application that allows users to browse different books, store their data in Firebase, and log in for a personalized experience. Built with React, Firebase Authentication, and Firestore Database.

## Features
- **Book Browsing:** Display a wide range of books.
- **User Authentication:** Login and register using Firebase Authentication.
- **Cloud Storage:** All user data and book information are stored securely in Firebase Firestore.

## Technologies Used
- **Frontend:** React
- **Backend:** Firebase (Authentication & Firestore)
- **Routing:** React Router
- **Deployment:** Firebase Hosting

## Setup Instructions

### Prerequisites
- Node.js (LTS version) installed on your system.
- Firebase project with Authentication and Firestore set up. [Firebase Console](https://console.firebase.google.com/)

### Steps to Run the Application Locally

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/(URL from the above)
2. **Navigate to the project directory**:

  Copy code
  cd book-store-website
  Install the required dependencies using npm:


Copy code
npm install
Create a Firebase project:

Go to the Firebase console: Firebase Console

Create a new Firebase project.

Enable Firebase Authentication (Email/Password) and Firestore Database.

Get your Firebase config details from the Firebase Console.

Update Firebase Config:

Open the src/firebase.js file.

Replace the placeholder configuration values with your Firebase project's details.

Run the development server:

bash
Copy code
npm start
Your application will be accessible at http://localhost:3000.
