import { Store, Task, User } from "@/utils/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
        set((state: Store) => ({ task: [...state.task, task] })),
      removeTask: (task: Task) =>
        set((state: Store) => ({
          task: state.task.filter((t) => t !== task),
        })),
      updateTask: (task: Task, newTask: Task) =>
        set((state: Store) => ({
          task: state.task.map((t) => (t === task ? newTask : t)),
        })),
      logout: () => {
        localStorage.removeItem("token");
        set({ user: null });
      },
    }),
    {
      name: "user-task-storage",
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useStore;
