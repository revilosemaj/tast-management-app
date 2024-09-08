import useStore from "@/store/store";
import { HEADER_TEXT } from "@/utils/constant";
import React from "react";

export default function Header() {
  const { user, logout } = useStore((state) => state);

  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">{HEADER_TEXT}</h1>
      <div className="flex items-center gap-4">
        <p className="text-lg font-medium capitalize">Hello, {user?.name}</p>
        <button
          className="bg-emerald-950 text-white px-4 py-2 rounded-md"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
