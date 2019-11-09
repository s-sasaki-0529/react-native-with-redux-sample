import { actionTypes } from './actions'

const INITIAL_STATE = {
    todoList: [
        { id: 1, label: 'TODOアプリを作る', done: false },
        { id: 2, label: '筋トレする', done: false },
        { id: 3, label: '晩御飯を食べる', done: true },
        { id: 4, label: 'Amazon注文する', done: true },
        { id: 5, label: 'D.C.Ⅲ.WYインストールする', done: false }
    ]
}

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todoList: state.todoList.concat(action.todo)
            }
        case actionTypes.DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.id != action.id)
            }
        case actionTypes.TOGGLE_TODO:
            return {
                ...state,
                todoList: state.todoList.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, done: !todo.done}
                    } else {
                        return todo
                    }
                })
            }
        default:
            return state
    }
}

export default todoReducer