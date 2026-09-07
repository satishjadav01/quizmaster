import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Modal from "../Components/Modal";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { FaCopy, FaExternalLinkAlt, FaTrash } from "react-icons/fa";

function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const [quizzes, setQuizzes] = useState([]);

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case "html":
        return "bg-red-500";
      case "css":
        return "bg-blue-500";
      case "javascript":
        return "bg-yellow-500";
      case "sql":
        return "bg-green-500";
      case "php":
        return "bg-purple-500";
      case "react":
        return "bg-cyan-500";
      case "nodejs":
        return "bg-green-600";
      case "mongodb":
        return "bg-green-700";
      case "api":
        return "bg-indigo-500";
      case "testing":
        return "bg-pink-500";
      case "devops":
        return "bg-orange-500";
      case "security":
        return "bg-gray-600";
      default:
        return "bg-gray-500";
    }
  };

  useEffect(() => {
    const loadQuizzes = async () => {
      if (currentUser) {
        const q = query(
          collection(db, "quizzes"),
          where("createdBy", "==", currentUser.uid),
        );
        const querySnapshot = await getDocs(q);
        const userQuizzes = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuizzes(userQuizzes);
      }
    };
    loadQuizzes();
  }, [currentUser]);

  const handleDelete = async (quizId) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      try {
        await deleteDoc(doc(db, "quizzes", quizId));
        setQuizzes(quizzes.filter((quiz) => quiz.id !== quizId));
      } catch (error) {
        console.error("Error deleting quiz:", error);
      }
    }
  };

  return (
    <div className="h-auto mt-10 max-w-[90%] mx-auto">
      <div className="flex justify-between items-center">
        <p className="font-bold">
          Welcome{", "}
          {currentUser.displayName ? currentUser.displayName : "Guest"}
        </p>
        <Link
          to="/createquiz"
          className="mt-4 px-4 py-2 border border-white/20 text-white rounded hover:bg-white/10"
        >
          Create New Quiz
        </Link>
      </div>

      <div className="min-h-screen rounded mt-10">
        <table className="border-0 w-full table-fixed border-collapse">
          <thead>
            <tr className="border-b-white/20 text-xs md:text-lg">
              <th>No.</th>
              <th>Type</th>
              <th>Title</th>
              <th className="hidden md:block">No. of Questions</th>
              <th>Visiblity</th>
              <th>Creation Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz, index) => (
              <tr
                key={quiz.id}
                className="border-b border-white/10 text-xs md:text-base"
              >
                <td className="p-2 text-center">{index + 1}</td>
                <td className="p-2 text-center">
                  <span
                    className={`px-2 py-1 rounded text-white font-medium text-xs capitalize ${getTypeColor(quiz.topic)}`}
                  >
                    {quiz.topic.charAt(0).toUpperCase() +
                      quiz.topic.slice(1).toLowerCase()}
                  </span>
                </td>
                <td className="p-2 text-center">{quiz.title}</td>
                <td className="p-2 text-center hidden md:table-cell">
                  {quiz.questions ? quiz.questions.length : 0}
                </td>
                <td className="p-2 text-center">
                  {quiz.visibility === "public" ? "Public" : "Private"}
                </td>
                <td className="p-2 text-center">
                  {new Date(quiz.createdAt.seconds * 1000).toLocaleDateString()}
                </td>
                <td className="p-2 text-center flex justify-around items-center">
                  <FaCopy
                    className="cursor-pointer hover:text-blue-400"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        window.location.origin + "/quiz/" + quiz.id,
                      )
                    }
                    title="Copy Quiz Link"
                  />
                  <Link to={`/quiz/${quiz.id}`}>
                    <FaExternalLinkAlt
                      className="cursor-pointer hover:text-green-400"
                      title="Open Quiz"
                    />
                  </Link>
                  <FaTrash
                    className="cursor-pointer hover:text-red-400"
                    onClick={() => handleDelete(quiz.id)}
                    title="Delete Quiz"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
