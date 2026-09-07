import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { updateCurrentUser, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";

const Modal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");

  return (
    <Dialog open={isOpen} onClose={() => {}}>
      <DialogBackdrop className="fixed inset-0 bg-black/80 bg-opacity-25" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded bg-white/20 p-6 shadow-lg flex flex-col justify-center items-center gap-10">
          <DialogTitle className="text-lg font-bold text-center text-white">
            Enter Name
          </DialogTitle>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-4 w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter name"
          />

          <div className="mt-4 flex justify-end">
            <button
              onClick={() => {
                // onSave(name);
                setUserName(name);
                setName("");
              }}
              disabled={!name.trim()}
              className="px-4 py-2 bg-white/20 text-white rounded hover:bg-blue-600 transition disabled:bg-gray-300 disabled:text-black disabled:cursor-not-allowed"
            >
              Save
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
