const todo = {
  addTodo: function (data) {
    return function (dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          title: data,
          userId: 1,
          completed: false,
        }),
      })
        .then((response) => response.json())
        .then(
          (data) =>
            dispatch({
              type: "ADD_TODO",
              payload: data,
            })
          //dispatch(todo.fetchTodo())
        );
    };
  },

  //   deleteTodo: (data) => ({
  //     type: "DELETE_TASK",
  //     payload: data,
  //   }),
  deleteTodo: (id) => async (dispatch) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      });
      dispatch({
        type: "DELETE_TASK",
        payload: id,
      });
    } catch (e) {
      console.log(e);
    }
  },

  // editTodo: (data) => ({
  //   type: "EDIT_TASK",
  //   payload: data,
  // }),

  editTodo: function (todo) {
    return function (dispatch) {
      return fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          userId: todo.userId,
          id: todo.id,
          title: todo.title,
          completed: todo.completed,
        }),
      })
        .then((response) => response.json())
        .then((todo) =>
          dispatch({
            type: "EDIT_TASK",
            payload: todo,
          })
        );
    };
  },
  //   fetchTodo: (data) => ({
  //     type: "FETCH_TODO",
  //     payload: data,
  //   }),
  fetchTodo: function () {
    return function (dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((response) =>
          dispatch({
            type: "FETCH_TODO",
            payload: response,
          })
        );
    };
  },
};

export default todo;
