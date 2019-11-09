export const actionTypes = {
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO'
}

export const addTodoAction = label => ({
    type: actionTypes.ADD_TODO,
    todo: {
        id: (new Date()).getTime(),
        label,
        done: false
    }
})

export const deleteTodoAction = id => ({
    type: actionTypes.DELETE_TODO,
    id
})

export const toggleTodoAction = id => ({
    type: actionTypes.TOGGLE_TODO,
    id
})