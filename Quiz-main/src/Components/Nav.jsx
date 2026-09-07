import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function Nav({ isOpen, setIsOpen }) {
  const { currentUser } = useContext(AuthContext);
  const [randomQuizId, setRandomQuizId] = useState(null);

  useEffect(() => {
    const fetchPublicQuizzes = async () => {
      const q = query(
        collection(db, "quizzes"),
        where("visibility", "==", "public"),
      );
      const snapshot = await getDocs(q);
      const quizzes = snapshot.docs.map((doc) => doc.id);
      if (quizzes.length > 0) {
        const randomId = quizzes[Math.floor(Math.random() * quizzes.length)];
        setRandomQuizId(randomId);
      }
    };
    fetchPublicQuizzes();
  }, []);
  async function LogOut() {
    try {
      signOut(auth);
      setIsOpen(false);
    } catch (e) {
      console.log(e);
      setIsOpen(false);
    }
  }
  return (
    <div
      className={
        isOpen
          ? "bg-[url('/bg.png')] bg-black/90 bg-blend-darken  md:max-w-1/3 absolute min-w-51  -left-40 top-15 rounded max-w-[80%] h-auto p-4 text-lg border-2 text-white/60 border-white/20 "
          : "hidden"
      }
    >
      {/* Navigation menu items can be added here */}
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <Link
            to={randomQuizId ? `/quiz/${randomQuizId}` : "#"}
            className=" hover:text-white flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FaPlay /> <p>Play</p>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <a href="#" className=" hover:text-white flex items-center gap-2">
            <FaMedal /> <p>Hall Of Fame</p>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a href="#" className="hover:text-white flex items-center gap-2">
            <FaFilter />
            <p>Filter</p>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a href="#" className="hover:text-white flex items-center gap-2">
            <GoCommentDiscussion />
            <p>Discussion</p>
          </a>
        </li>
      </ul>
      <div className="flex md:hidden justify-around mt-5 items-center">
        <Link
          to="/signin"
          href="#"
          className="text-white text-sm hover:text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          {currentUser ? "" : "Login"}
        </Link>
        {currentUser ? (
          <button
            onClick={LogOut}
            className="text-white font-medium bg-white/10 px-4 py-2 rounded border-0.5 border-white/20 hover:bg-white/20"
          >
            Log out
          </button>
        ) : (
          <Link
            onClick={() => setIsOpen(false)}
            to="/signup"
            className="text-white font-medium bg-white/10 text-sm px-4 py-2 rounded border-0.5 border-white/20 hover:bg-white/20"
          >
            Register
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
