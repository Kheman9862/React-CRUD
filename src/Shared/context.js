import React,{createContext,useReducer} from 'react';

// First we will get the initial data 
const initialState = {
  users:[] //empty array of users initially
}

// this is a reducer function which is similar to redux reducer it will take the action type and perform operation for the given type.
const reducer = (state,action)=>{

  switch (action.type) {
    case 'ADD_DATA': //This case is used to add data
      return {
        ...state, //spread operator is used so that our initial state will not change 
        users: [action.payload, ...state.users] 
    }
    case 'DELETE_DATA': //This case is used to delete an item in the given array of users
      return {
        ...state,
        users: state.users.filter(user => {  //to delete data we are filtering out the users on the basis of the user id.
        return user.id !== action.payload;
         })
          }
    case 'EDIT_DATA': //This case is used to edit an item in the given array of the users
       const updateUser = action.payload;
       const updateUsers = state.users.map(user => {  // We will select the specific user that will match the id and update that one
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

// Creating context
export const SharedContext = createContext(initialState);


// Creating Provider this will take all the dispatch values
export const SharedProvider = ({children}) =>{
  // using useReducer hook  
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

// Returning the provider that will let us subscribe to the following values
return <SharedContext.Provider value={{
      users: state.users,
      addData,
      deleteData,
      editData
}}>
    {children}
</SharedContext.Provider>
}