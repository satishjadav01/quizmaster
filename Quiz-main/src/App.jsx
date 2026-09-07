import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router";
import SignUp from "./Auth/SignUp";
import MainLayout from "./MainLayout";
import SignIn from "./Auth/SignIn";
import Dashboard from "./Pages/Dashboard";
import CreateQuizPage from "./Components/CreateQuizPage";
import ProtectedRoute from "./Auth/ProtectedRoute";
import Quiz from "./Pages/Quiz";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/homepage" element={<LandingPage />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route
              path="/createquiz"
              element={
                <ProtectedRoute>
                  <CreateQuizPage />
                </ProtectedRoute>
              }
            />
            <Route path="/quiz/:id" element={<Quiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
