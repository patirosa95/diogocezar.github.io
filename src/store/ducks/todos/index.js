// Action Types
const Types = {
  GET_TODOS: 'todos/GET_TODOS',
  ADD_TODO: 'todos/ADD_TODO',
  DELETE_TODO: 'todos/DELETE_TODO',
}

const initState = {
  todos: [],
}

export default function TodosReducer(state = initState, action) {
  switch (action.type) {
    case Types.GET_TODOS:
      return {
        ...state,
        data: action.data,
      }
    case Types.ADD_TODO:
      return {
        ...state,
        data: [...state.data, action.data],
      }
    case Types.DELETE_TODO:
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== action.id),
      }
    default:
      return state
  }
}

// Dispatches
export const Creators = {
  // loadTodos: () => (dispatch) => {
  //   api.endpoints.todos().then(response => dispatch({
  //     type: Types.GET_TODOS,
  //     payload: response.data,
  //   }))
  // },
  // addTodo: todo => (dispatch) => {
  //   api.endpoints.add(todo).then(response => dispatch({
  //     type: Types.ADD_TODO,
  //     payload: response.data,
  //   }))
  // },
  // deleteTodo: todo => (dispatch) => {
  //   api.endpoints.delete(todo).then(response => dispatch({
  //     type: Types.DELETE_TODO,
  //     payload: response.data,
  //   }))
  // },
}
