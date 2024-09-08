import useStore from "@/store/store";
import React, { useState } from "react";

export default function Login({ handleUser }: { handleUser: () => void }) {
  const { numberOfUsers, setUser, setNumberOfUsers } = useStore(
    (state) => state
  );
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const transformedInput = inputValue.replaceAll(" ", "");
    const token = `${transformedInput}-${numberOfUsers + 1}`;

    if (transformedInput) {
      setUser({
        id: token,
        name: inputValue,
      });
      setNumberOfUsers(numberOfUsers + 1);
      setInputValue("");
      handleUser();
    } else {
      setError("Please enter a name");
    }
  };

  const handleAnonymous = () => {
    setUser({
      id: `anonymous-${numberOfUsers + 1}`,
      name: "anonymous",
    });
    setNumberOfUsers(numberOfUsers + 1);
    handleUser();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-2xl font-bold">What is your name?</h1>
      <form
        className="flex flex-col items-center justify-center gap-4 mt-6 p-4 rounded-md md:w-[35%] sm:w-[80%]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="if you want to be known, enter your name"
          className="w-full p-2 rounded-md border-2 border-gray-300 focus:border-emerald-900 focus:outline-none"
          onChange={handleChange}
        />
        <p
          className={`text-sm text-red-950 ${
            !inputValue && error ? "block" : "hidden"
          }`}
        >
          {error}
        </p>
        <button
          type="submit"
          className="w-full p-2 rounded-md bg-emerald-900 text-white"
        >
          Enter
        </button>
        <button
          type="button"
          onClick={handleAnonymous}
          className="w-full p-2 rounded-md bg-emerald-900 text-white"
        >
          Make it anonymous
        </button>
      </form>
    </div>
  );
}
