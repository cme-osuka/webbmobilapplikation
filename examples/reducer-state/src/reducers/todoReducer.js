export function todoReducer(state, action) {
  
  //console.log("currentState", state);
  //console.log("action", action);

  if (action.type === "added") {
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        done: false
      }
    ]
  }

  if (action.type === "edited") {
    return state.map(t => {
      if (t.id === action.todo.id) {
        return action.todo;
      } else {
        return t;
      }
    })
  }

  if (action.type === "deleted") {
    return state.filter(t => t.id !== action.id);
  }

  return state;
}