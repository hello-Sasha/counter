const initialState = {
  list: [],
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
      case 'ADD_TODO': return {...state, list: [...state.list, payload]};
      case 'DELETE_TASK': return {...state, list: [...state.list.splice( 0, state.list.indexOf(payload)), ...state.list.splice( state.list.indexOf(payload)+1)]} ;
      case 'EDIT_TASK': return {...state, list: [...state.list, payload]};
      default:
          return state;
  }
};
