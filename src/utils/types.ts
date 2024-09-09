export interface Store {
  numberOfUsers: number;
  user: User | null;
  task: Task[];
  setNumberOfUsers: (numberOfUsers: number) => void;
  setUser: (user: User) => void;
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  updateTask: (task: Task, newTask: Task) => void;
  logout: () => void;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface User {
  id: string;
  name: string;
}
