import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Store {
  numberOfUsers: number;
  user: User | null;
  task: Task[];
  setNumberOfUsers: (numberOfUsers: number) => void;
  setUser: (user: User) => void;
  addTask: (task: Task) => void;
  removeTask: (task: Task) => void;
  updateTask: (task: Task, newTask: Task) => void;
}

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface User {
  id: string;
  name: string;
}

const useStore = create(
  persist<Store>(
    (set) => ({
      numberOfUsers: 0,
      user: null,
      task: [],
      setNumberOfUsers: (numberOfUsers: number) => set({ numberOfUsers }),
      setUser: (user: User) =>
        set(() => {
          localStorage.setItem("token", user.id);
          return { user };
        }),
      addTask: (task: Task) =>
        set((state: { task: Task[] }) => ({ task: [...state.task, task] })),
      removeTask: (task: Task) =>
        set((state: { task: Task[] }) => ({
          task: state.task.filter((t) => t !== task),
        })),
      updateTask: (task: Task, newTask: Task) =>
        set((state: { task: Task[] }) => ({
          task: state.task.map((t) => (t === task ? newTask : t)),
        })),
    }),
    {
      name: "user-task-storage",
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useStore;
