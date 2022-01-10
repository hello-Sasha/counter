import { query } from "../../helpers/query";

const todo = {
  addTodo: function (data) {///////////////////////////
    return async function (dispatch) {
      try {
        await query(
          `todos`,
          "POST",
           data,
          "charset=UTF-8"
        );
        dispatch({
          type: "ADD_TODO",
          payload: { id: 201, title: data, userId: 1, completed: false,}
        });
      } catch (e) {
        console.log(e);
      }
    };
  },

  // addTodo: function (data) {
  //   return function (dispatch) {
  //     return fetch("https://jsonplaceholder.typicode.com/todos", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json; charset=UTF-8" },
  //       body: JSON.stringify({
  //         title: data,
  //         userId: 1,
  //         completed: false,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then(
  //         (data) =>
  //           dispatch({
  //             type: "ADD_TODO",
  //             payload: data,
  //           })
  //         //dispatch(todo.fetchTodo())
  //       );
  //   };
  // },



  deleteTodo: (id) => async (dispatch) => {
    try {
      await query(`todos/${id}`, "DELETE");
      dispatch({
        type: "DELETE_TASK",
        payload: id,
      });
    } catch (e) {
      console.log(e);
    }
  },

 
  editTodo: function (todo) {
    return async function (dispatch) {
      try {
        await query(
          `todos/${todo.id}`,
          "PUT",
          {
            userId: todo.userId,
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
          },
          "charset=UTF-8"
        );
        dispatch({
          type: "EDIT_TASK",
          payload: todo,
        });
      } catch (e) {
        console.log(e);
      }
    };
  },

  fetchTodo: function () {
    return async function (dispatch) {
      try {
        const data = await query("todos");
        dispatch({
          type: "FETCH_TODO",
          payload: data,
        });
      } catch (e) {
        console.log(e);
      }
    };
  },

  login: function(data){
    return async function(){
      try{
       const resp = await query(
          `auth/login`,
          "GET",
           data,
        );
        console.log(resp);
      } catch(e){
        console.log(e);
      }
    }
  },
  signUp: function(data){
    return async function(){
      try{
        const resp =await query(
          `auth/signup`,
          'POST',
          data
        );
        console.log(resp);
      } catch(e){
        console.log(e);
      }
    }
  }
};

export default todo;
