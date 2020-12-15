import {useState,useContext,useEffect} from 'react';
import { Button, Paper, TextField } from '@material-ui/core';
import { Link,useHistory } from 'react-router-dom';
import { SharedContext } from '../Shared/context';


/* Mainly because of edit function i realized that using users as a global would be more effective 
as i need to access data and passing from parent to child can get complicated. 
So because of this i introduced context in my program.
*/

export default function EditUserName(props) {
const {users,editData} = useContext(SharedContext); //subscribing to the context value
const [editUser,setEditUser] = useState({
    name:"",
    id:""
})


const userId = props.match.params.id;//This will get the id from the url
const Route = useHistory(); //Using this to get back to main page after submitting the request

// Very important hook used this will help in finding the id and creating the update in the users data
useEffect(() => {
    const selectedID = userId;
    const selectedName = users.find(user=>user.id===selectedID);
    setEditUser(selectedName);
}, [userId,users])//These are the dependecy and upon changing in any of the dependency this hook will run

const handleSubmit = (e) => {
    e.preventDefault();
    editData(editUser);
    Route.push("/");
  }

const handleChange = (e) => {
    const {name,value} = e.target;
    setEditUser({...editUser,[name]:value});
  }

    return (
        <Paper style={{width:"50%",height:"200px"}}>
          <form onSubmit={handleSubmit}>
          <TextField id="my-input" type="text" value={editUser.name} onChange={handleChange} name="name" />
        <br/>
        <div>
          <Button type="submit">Edit</Button>
          <Link to="/" style={{color:"inherit",textDecoration:"none",fontSize:"17px",marginLeft:"5px"}}>Cancel</Link>
        </div>
       </form>
      </Paper>
    )
}
