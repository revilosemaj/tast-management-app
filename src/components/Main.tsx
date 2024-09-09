"use client";

import { isUserLoggedIn } from "@/utils/helper";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Loader from "./Loader";
import Header from "./Header";
import useStore from "@/store/store";
import { IoIosTrash, IoMdTrash } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

const SAMPLE_TASK_DATA = [
  {
    id: 1,
    title: "title 1",
    description: "this is description of title 1",
    completed: false,
  },
  {
    id: 2,
    title: "title 2",
    description: "this is description of title 2",
    completed: false,
  },
];

export default function Main() {
  const { user, task, addTask, removeTask } = useStore((state) => state);
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
        <div className="h-[100%] w-[100%]">
          <ul className="w-[50%] p-5">
            {task.map((item) => (
              <li
                key={item.id}
                className="flex align-middle border-2 border-emerald-950 mb-2 rounded-md p-5 capitalize"
              >
                <span className="basis-10/12">{item.title}</span>
                <div className="flex align-middle justify-center gap-3 basis-2/12">
                  <FaRegEdit className="text-emerald-950 h-6 w-6" />
                  <IoMdTrash
                    className="text-emerald-950 h-6 w-6"
                    onClick={() => removeTask(item.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return isLogin ? renderContent() : <Login handleUser={handleUser} />;
}
