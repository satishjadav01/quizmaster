import React, { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Nav from "./Nav";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { currentUser, AuthLoading } = useContext(AuthContext);

  async function LogOut() {
    try {
      signOut(auth);
      console.log("Success");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex justify-between md:max-w-[70%]  max-w-[90%]  m-auto items-center py-4">
      <div className="font-bold text-white text-4xl">
        <Link to="/">
          {" "}
          Quiz<span className="text-primary">.</span>
        </Link>
      </div>
      <div
        className="flex gap-10 text-xl justify-center
       items-center"
      >
        <div className="hidden md:flex gap-10 justify-center items-center">
          <Link
            to="/signin"
            className={
              currentUser
                ? "hidden"
                : "text-white font-medium hover:text-gray-300"
            }
          >
            Login
          </Link>
          {currentUser ? (
            <button
              onClick={LogOut}
              className="text-white text-sm font-medium bg-white/10 px-4 py-2 rounded border-0.5 border-white/20 hover:bg-white/20"
            >
              Log out
            </button>
          ) : (
            <Link
              to="/signup"
              className="text-white font-medium bg-white/10 px-4 py-2 rounded border-0.5 border-white/20 hover:bg-white/20"
            >
              Register
            </Link>
          )}
        </div>
        <div className="relative">
          <button
            className="hover:bg-white/10  rounded  p-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoIosClose size={34} className="text-5xl" />
            ) : (
              <RxHamburgerMenu size={34} />
            )}
          </button>

          <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
}

export default Header;
