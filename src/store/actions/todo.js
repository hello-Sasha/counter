const todo = {
    addTodo: data => ({
        type: "ADD_TODO",
        payload: data
    }),
    deleteTodo: data =>({
        type: "DELETE_TASK",
        payload: data
    }),
    editTodo: data =>({
        type: "EDIT_TASK",
        payload: data
    }),
    fetchTodo: data =>({
        type: "FETCH_TODO",
        payload: data
    }),
   

}

export default todo;