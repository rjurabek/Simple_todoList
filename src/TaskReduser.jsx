export default function TasksReducer(state, action) {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: Date.now(),
            text: action.text,
            status: "to-do",
          },
        ];
  
      case "remove":
        return state.filter((task) => task.id !== action.id);
  
      case "move":
        return state.map((task) =>
          task.id == action.id
            ? { ...task, status: action.status }
            : task
        );
  
      default:
        return state;
    }
  }
  