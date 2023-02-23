import { v1 } from "uuid";
import { TaskType } from "../Todolist";

export const tasksReducer = (state: TaskType[], action: MainActionType) => {
  switch (action.type) {
    case "REMOVE-TASK": {
      return state.filter(t => t.id !== action.payload.id);
    }
    case "ADD-TASK": {
      return [{ id: v1(), title: action.payload.title, isDone: false }, ...state]
    }
    default:
      return state;
  }
};

type removeTaskACType = ReturnType<typeof removeTaskAC>
type addTaskACType = ReturnType<typeof addTaskAC>
type MainActionType = removeTaskACType | addTaskACType;

export const removeTaskAC = (id: string) =>
  ({
    type: "REMOVE-TASK",
    payload: {
      id,
    },

  } as const);

export const addTaskAC = (title: string) =>
  ({
    type: "ADD-TASK",
    payload: {
        title,
    },
  } as const);
