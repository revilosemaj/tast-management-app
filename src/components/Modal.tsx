import React from "react";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  return (
    <div className="flex align-middle items-center justify-center h-full w-full bg-black z-10 fixed top-0 left-0 opacity-80">
      <div className="h-[50%] w-[35%] bg-white rounded-md">
        <button
          className="bg-emerald-950 p-5 text-white font-bold"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
