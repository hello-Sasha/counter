const initialState = {
  list: [],
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
      case 'ADD_TODO': return {...state, list: [...state.list, {id: state.list.length, name:payload}]};
      case 'DELETE_TASK': return {...state, list: [...state.list.filter(
                                                                        (el)=>( el.id !== payload )                                                                  
                                                                        )]} ;

      case 'EDIT_TASK': return {...state, list: [...state.list.map(
                                                                   (el) => { if(el.id === payload.id) {return payload} else {return el}  }
                                                                  )
                                                ]
                               };
      default:
          return state;
  }
};
