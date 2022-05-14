import { combineReducers } from "redux"
import todolistReducers from "./todolist.js"

const appReducer = combineReducers({
  todolist: todolistReducers
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
