import App from "App";

// Reducer.tsx

interface Todo {
    id: number;
    text: string;
  }
  
  interface Action {
    type: string;
    payload: any;
  }
  
  // Reducer 함수: 투두 상태를 관리하는 함수
  const todoReducer = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, { id: Date.now(), text: action.payload }];
      case 'DELETE_TODO':
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };
  
export default { todoReducer };