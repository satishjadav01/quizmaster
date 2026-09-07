import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { FaCheck } from "react-icons/fa";

function Quiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const docRef = doc(db, "quizzes", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setQuiz(docSnap.data());
          if (docSnap.data().visibility === "public") {
            setIsAuthenticated(true);
          }
        } else {
          setError("Quiz not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [id]);

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === quiz.pin) {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError("Incorrect PIN");
    }
  };

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === quiz.questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setShowResults(true);
    }
  };

  const getRemarks = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 90) return "Excellent!";
    if (percentage >= 70) return "Good job!";
    if (percentage >= 50) return "Not bad!";
    return "Keep practicing!";
  };

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  if (!quiz) return <div className="text-center mt-20">Quiz not found</div>;

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col  max-w-[90%] md:max-w-[30%] m-auto h-auto py-20 gap-8">
        <h2 className="text-center font-bold text-5xl">Enter PIN</h2>
        <form onSubmit={handlePinSubmit} className="flex flex-col gap-5">
          <input
            type="password"
            placeholder="Enter PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full border border-white/20 p-4 rounded-2xl bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            required
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="text-white w-1/2 bg-white/20 text-lg font-bold px-4 py-3 rounded-xl border border-white/20 hover:bg-white/30 hover:border-white/30 transition-all"
            >
              Submit
            </button>
            <Link
              to="/"
              className="text-white w-1/2 text-center bg-white/20 text-lg font-bold px-4 py-3 rounded-xl border border-white/20 hover:bg-white/30 hover:border-white/30 transition-all"
            >
              Cancel
            </Link>
          </div>
        </form>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="flex flex-col max-w-[90%] md:max-w-[50%] m-auto h-auto py-20 gap-8 text-center">
        <h2 className="font-bold text-4xl">Quiz Completed!</h2>
        <p className="text-2xl">
          Your Score: {score} / {quiz.questions.length}
        </p>
        <p className="text-xl">{getRemarks(score, quiz.questions.length)}</p>
        <Link
          to="/"
          className="text-white bg-white/20 text-lg font-bold px-4 py-3 rounded-xl border border-white/20 hover:bg-white/30 hover:border-white/30 transition-all self-center"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="flex flex-col max-w-[90%] md:max-w-[50%] m-auto h-auto py-20 gap-8">
      <div className="flex flex-col justify-between ">
        <h2 className="font-bold text-3xl">{quiz.title}</h2>
        <p className="text-lg">
          {currentQuestionIndex + 1} / {quiz.questions.length}
        </p>
      </div>
      <div className="bg-white/20 p-6 rounded-xl border border-white/20">
        <p className="text-xl font-semibold mb-4">
          Question ({currentQuestionIndex + 1}): {currentQuestion.question}
        </p>
        <div className="flex flex-col gap-2">
          {currentQuestion.options.map((opt, index) => (
            <div
              key={index}
              className={`bg-white/20 p-4 rounded-xl border border-white/20 cursor-pointer flex items-center gap-3 ${selectedOption === index ? "bg-white/30" : ""}`}
              onClick={() => handleOptionSelect(index)}
            >
              {selectedOption === index && (
                <FaCheck className="text-green-500" />
              )}
              <span>{opt}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        disabled={selectedOption === null}
        className="text-white bg-white/20 text-lg font-bold px-4 py-3 rounded-xl border border-white/20 hover:bg-white/30 hover:border-white/30 transition-all disabled:opacity-50 self-end"
      >
        {currentQuestionIndex === quiz.questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default Quiz;
