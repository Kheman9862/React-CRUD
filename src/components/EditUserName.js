import {useState,useContext,useEffect} from 'react';
import { Button, Paper, TextField } from '@material-ui/core';
import { Link,useHistory } from 'react-router-dom';
import { SharedContext } from '../Shared/context';

export default function EditUserName(props) {
const {users,editData} = useContext(SharedContext);
const [editUser,setEditUser] = useState({
    name:"",
    id:""
})

const userId = props.match.params.id;
const Route = useHistory();

useEffect(() => {
    const selectedID = userId;
    const selectedName = users.find(user=>user.id===selectedID);
    setEditUser(selectedName);
}, [userId,users])

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
