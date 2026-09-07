import React, { useState } from "react";
import { auth, db } from "../../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { useNavigate } from "react-router";

function CreateQuizPage() {
  const [info, setInfo] = React.useState(true);
  const [questions, setQuestions] = React.useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("private");
  const [topic, setTopic] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [quizId, setQuizId] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correct, setCorrect] = useState(0);
  const [localQuestions, setLocalQuestions] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const user = auth.currentUser;
    if (!user) {
      setError("Please login first");
      setLoading(false);
      return;
    }
    setInfo(false);
    setQuestions(true);
    setLoading(false);
  };

  const handleAddQuestion = () => {
    if (!questionText || !option1 || !option2 || !option3 || !option4) {
      setError("Please fill all fields");
      return;
    }
    const questionObject = {
      question: questionText,
      options: [option1, option2, option3, option4],
      answer: correct,
    };
    setLocalQuestions([...localQuestions, questionObject]);
    setQuestionText("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setCorrect(0);
    setError(null);
  };

  const handleSave = async () => {
    if (localQuestions.length === 0) {
      setError("Add at least one question");
      return;
    }
    try {
      const user = auth.currentUser;
      const quizData = {
        title,
        description,
        visibility,
        topic,
        createdBy: user.uid,
        createdAt: serverTimestamp(),
        questions: localQuestions,
        ...(visibility === "private" && { pin }),
      };
      await addDoc(collection(db, "quizzes"), quizData);
      window.scrollTo(0, 0);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col max-w-[90%] md:max-w-[50%] m-auto h-auto py-20 gap-8">
      {info && (
        <div>
          <h2 className="text-center font-bold text-5xl mb-10">Details </h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Quiz Title"
              className="w-full border border-white/20 p-4 rounded-2xl bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Quiz Description"
              className="w-full border border-white/20 p-4 rounded-2xl bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex flex-col gap-3">
              <label className="text-lg font-medium text-white">
                Visibility
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-3 cursor-pointer text-white">
                  <input
                    type="radio"
                    name="visibility"
                    value="public"
                    className="peer hidden"
                    required
                    checked={visibility === "public"}
                    onChange={(e) => setVisibility(e.target.value)}
                  />
                  <span className="w-5 h-5 border-2 border-white/20 rounded-full flex items-center justify-center peer-checked:border-white peer-checked:bg-white/20 transition-all">
                    <span className="w-2 h-2 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></span>
                  </span>
                  Public
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-white">
                  <input
                    type="radio"
                    name="visibility"
                    value="private"
                    className="peer hidden"
                    checked={visibility === "private"}
                    onChange={(e) => setVisibility(e.target.value)}
                  />
                  <span className="w-5 h-5 border-2 border-white/20 rounded-full flex items-center justify-center peer-checked:border-white peer-checked:bg-white/20 transition-all">
                    <span className="w-2 h-2 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></span>
                  </span>
                  Private
                </label>
              </div>
            </div>
            {visibility === "private" && (
              <div className="form-group">
                <label className="text-xl font-medium !text-white">
                  4-Digit PIN
                </label>
                <input
                  type="password"
                  placeholder="Enter 4-digit PIN"
                  className="w-full border border-white/20 p-4 rounded-2xl bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  maxLength="4"
                  pattern="\d{4}"
                />
              </div>
            )}
            <select
              name="topic"
              id="topic"
              className="w-full border border-white/20 p-4 pr-8 rounded-2xl bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              required
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="" disabled className="bg-black text-white">
                Select a topic
              </option>
              <option value="html" className="bg-black text-white">
                HTML
              </option>
              <option value="css" className="bg-black text-white">
                CSS
              </option>
              <option value="javascript" className="bg-black text-white">
                JavaScript
              </option>
              <option value="sql" className="bg-black text-white">
                SQL
              </option>
              <option value="php" className="bg-black text-white">
                PHP
              </option>
              <option value="react" className="bg-black text-white">
                React
              </option>
              <option value="nodejs" className="bg-black text-white">
                NodeJS
              </option>
              <option value="mongodb" className="bg-black text-white">
                MongoDB
              </option>
              <option value="api" className="bg-black text-white">
                API
              </option>
              <option value="testing" className="bg-black text-white">
                Testing
              </option>
              <option value="devops" className="bg-black text-white">
                DevOps
              </option>
              <option value="security" className="bg-black text-white">
                Security
              </option>
            </select>
            <button
              type="submit"
              className="text-white bg-white/20 text-lg font-bold px-4 py-3 rounded-xl border border-white/20 hover:bg-white/30 hover:border-white/30 transition-all"
            >
              {loading ? "Creating..." : "Create Quiz"}
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
      )}
      {questions && (
        <div className="flex flex-col max-w-[90%] md:max-w-[50%] m-auto h-auto py-20 gap-8">
          <div className="flex justify-between items-center">
            <h2 className="text-center font-bold text-5xl">Add Questions</h2>
            <button
              onClick={handleSave}
              className="text-white bg-white/20 text-lg font-bold px-4 py-3 rounded-xl border border-white/20 hover:bg-white/30 hover:border-white/30 transition-all"
            >
              Save
            </button>
          </div>
          <p className="text-white text-center">
            Questions added: {localQuestions.length}
          </p>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Question"
              className="w-full border border-white/20 p-4 rounded-2xl bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Option 1"
                className="w-full border border-white/20 p-4 rounded-2xl bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Option 2"
                className="w-full border border-white/20 p-4 rounded-2xl bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
              />
              <input
                type="text"
                placeholder="Option 3"
                className="w-full border border-white/20 p-4 rounded-2xl bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                value={option3}
                onChange={(e) => setOption3(e.target.value)}
              />
              <input
                type="text"
                placeholder="Option 4"
                className="w-full border border-white/20 p-4 rounded-2xl bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                value={option4}
                onChange={(e) => setOption4(e.target.value)}
              />
            </div>
            <label className="text-xl font-medium !text-white">
              Correct Answer
            </label>
            <select
              value={correct}
              onChange={(e) => setCorrect(parseInt(e.target.value))}
              className="w-full border border-white/20 p-4 pr-8 rounded-2xl bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <option value={0} className="bg-black text-white">
                Option 1
              </option>
              <option value={1} className="bg-black text-white">
                Option 2
              </option>
              <option value={2} className="bg-black text-white">
                Option 3
              </option>
              <option value={3} className="bg-black text-white">
                Option 4
              </option>
            </select>
            <button
              onClick={handleAddQuestion}
              className="text-white bg-white/20 text-lg font-bold px-4 py-3 rounded-xl border border-white/20 hover:bg-white/30 hover:border-white/30 transition-all"
            >
              Add Question
            </button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default CreateQuizPage;
