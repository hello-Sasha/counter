const initialState = {
  list: [],
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
      case 'FETCH_TODO': return {...state, list: payload };
      case 'ADD_TODO': return {...state, list: [...state.list, { userId:1, id: state.list.length, name:payload, completed:false}]};
      case 'DELETE_TASK': return {...state, list: [...state.list.filter(
                                                                        (el)=>( el.id !== payload )                                                                  
                                                                        )]} ;

      case 'EDIT_TASK': return {...state, list: 
                                          [...state.list.map 
                                            (
                                              (el) => { if(el.id === payload.id) {return payload} else {return el}  }
                                            )
                                          ]
                                };
    
      default:
          return state;
  }
};
