# Quiz Web Application

A modern, responsive **Quiz Web Application** built with **React**, **Firebase**, and **Tailwind CSS**. This application supports **public and private quizzes**, PIN-based access, real-time data fetching from Firestore, and an interactive quiz-taking experience with scoring and result evaluation.

---

## 🚀 Features

- 🔐 **Public & Private Quizzes**
  - Public quizzes are accessible without authentication
  - Private quizzes are protected via a secure PIN system

- 📊 **Real-Time Quiz Data**
  - Quizzes and questions are fetched dynamically from Firebase Firestore

- 🧠 **Interactive Quiz Experience**
  - One question at a time
  - Option selection with visual feedback
  - Automatic score calculation

- 🏁 **Result Summary**
  - Final score display
  - Performance-based remarks (Excellent, Good, etc.)

- 🎨 **Modern UI**
  - Built with Tailwind CSS
  - Fully responsive design

---

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router
- **Backend / Database:** Firebase Firestore
- **Authentication Logic:** PIN-based access control
- **Styling:** Tailwind CSS
- **Icons:** React Icons

---

## 📁 Project Structure

```text
Quiz/
├── 📁 public/                 # Static assets (images, icons)
│   ├── 📁 images/             # UI and content images
│   ├── bg.png                 # Background asset
│   └── vite.svg               # Vite logo
├── 📁 src/                    # Source code
│   ├── 📁 assets/             # Component-specific assets
│   ├── 📁 Auth/               # Authentication logic & components
│   │   ├── ProtectedRoute.jsx # Route guard for logged-in users
│   │   ├── SignIn.jsx         # Sign-in page
│   │   └── SignUp.jsx         # Sign-up page
│   ├── 📁 Components/         # Reusable UI components
│   │   ├── Card.jsx           # Quiz/Item card
│   │   ├── CreateQuizPage.jsx # Quiz creation interface
│   │   ├── Header.jsx         # Application header
│   │   ├── Nav.jsx            # Navigation bar
│   │   └── ... (Footer, Loader, Modal, etc.)
│   ├── 📁 Context/            # Global state management
│   │   └── AuthContext.jsx    # User authentication state
│   ├── 📁 Pages/              # Full page components
│   │   ├── Dashboard.jsx      # User dashboard
│   │   ├── LandingPage.jsx    # Main home page
│   │   └── Quiz.jsx           # Quiz taking page
│   ├── App.css                # Global styles
│   ├── App.jsx                # Main application component
│   ├── index.css              # Base Tailwind/Global styles
│   ├── MainLayout.jsx         # Shared layout wrapper
│   └── main.jsx               # Entry point
├── .env                       # (NEW) Environment variables (HIDDEN FROM GIT)
├── .gitignore                 # Files excluded from GitHub
├── firebase.js                # Firebase initialization & config
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
└── vercel.json                # Vercel deployment settings

```

## 🔥 Firestore Data Structure

### Quiz Document (`quizzes` collection)

```js
{
  title: "React Basics Quiz",
  visibility: "private", // or "public"
  pin: "1234", // required only for private quizzes
  questions: [
    {
      question: "What is React?",
      options: [
        "A JavaScript library",
        "A framework",
        "A database",
        "A programming language"
      ],
      answer: 0
    }
  ]
}
```

> ⚠️ **Important:** Options are stored as arrays to preserve order and ensure accurate scoring.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Abdullah-warraich-ch/quiz-web-app.git
cd quiz-web-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Firebase Configuration

Create a Firebase project and add your credentials in `firebase.js`:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### 4️⃣ Run the App

```bash
npm run dev
```

---

## ✅ How Scoring Works

- Each correct answer increases the score by **1**
- Score updates use **functional state updates** to avoid race conditions
- Final results are calculated accurately after the last question

---

## 🧪 Known Improvements (Future Enhancements)

- Timer-based quizzes
- Shuffle options using Fisher–Yates algorithm
- Admin dashboard for quiz creation
- Leaderboard system
- Authentication with Firebase Auth

---

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**satish jadav**  
Software Engineering Graduate | FullStack Developer

---

⭐ If you like this project, please give it a star on GitHub!
