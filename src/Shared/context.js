import React,{createContext,useReducer} from 'react';

const initialState = {
  users:[]
}

const reducer = (state,action)=>{

  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        users: [action.payload, ...state.users]
    }
    case 'DELETE_DATA':
      return {
        ...state,
        users: state.users.filter(user => {
        return user.id !== action.payload;
         })
          }
    case 'EDIT_DATA':
       const updateUser = action.payload;
       const updateUsers = state.users.map(user => {
            if (user.id === updateUser.id) return updateUser;
            return user;
          })
          return {
            ...state,
            users: updateUsers
          }
        default:
          return state;
}
}

export const SharedContext = createContext(initialState);

export const SharedProvider = ({children}) =>{
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const addData = (user) => {
    dispatch({
      type: 'ADD_DATA',
      payload: user
    })
  }

  const deleteData = (id) => {
    dispatch({
      type: 'DELETE_DATA',
      payload: id
    })
  }


  const editData = (user) => {
    dispatch({
      type: 'EDIT_DATA',
      payload: user
    })
}

return <SharedContext.Provider value={{
      users: state.users,
      addData,
      deleteData,
      editData
}}>
    {children}
</SharedContext.Provider>
}