"use client";

import BackgroundText from "@/components/BackgroundText";
import Loader from "@/components/Loader";
import Login from "@/components/Login";
import { isUserLoggedIn } from "@/utils/helper";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(
    user === null ? true : false
  );

  useEffect(() => {
    setUser(isUserLoggedIn());
    setIsLoading(false);
  }, []);

  const handleUser = () => {
    setUser((prev) => !prev);
  };

  return (
    <>
      <BackgroundText />
      <div className="h-[75vh] w-[70vw] fixed bottom-[15vh] right-[15vw] bg-white rounded-xl opacity-70">
        {isLoading ? (
          <Loader />
        ) : user ? (
          <h1>Hello World</h1>
        ) : (
          <Login handleUser={handleUser} />
        )}
      </div>
    </>
  );
}
