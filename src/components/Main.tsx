"use client";

import { isUserLoggedIn } from "@/utils/helper";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Loader from "./Loader";
import Header from "./Header";
import useStore from "@/store/store";

export default function Main() {
  const { user } = useStore((state) => state);
  const [isLogin, setIsLogin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(
    user === null ? true : false
  );

  useEffect(() => {
    setIsLogin(isUserLoggedIn());
    setIsLoading(false);
  }, [user]);

  const handleUser = () => {
    setIsLogin((prev) => !prev);
  };

  if (isLoading) {
    return <Loader />;
  }

  const renderContent = () => {
    return (
      <div>
        <Header />
      </div>
    );
  };

  return isLogin ? renderContent() : <Login handleUser={handleUser} />;
}
