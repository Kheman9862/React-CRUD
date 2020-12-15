import React,{useState,useContext} from 'react';
import { Button, Paper, TextField } from '@material-ui/core';
import { Link,useHistory } from 'react-router-dom';
import { SharedContext } from '../Shared/context';
import shortID from 'shortid';

export default function AddUserName() {

const [name, setName] = useState(''); //initializing the name value
const { addData } = useContext(SharedContext); //subscribing to the context value
const Route = useHistory(); //This is needed because once we click submit i want to see my list and i cannot click back arrow since data is temporarily stored as there is no database/local storage used.

// id is generated using shortID which is a npm package
const handleSubmit = (e) => {
    e.preventDefault();
    addData({name,id:shortID.generate()});
    Route.push("/");
    }
  
const handleChange = (e) => {
    setName(e.target.value);
    }

    return (
        <Paper style={{width:"50%",height:"200px"}}>
          <form onSubmit={handleSubmit}>
            <TextField id="my-input" type="text" value={name} onChange={handleChange} name="name" />
          <br/>
          <div>
            <Button type="submit">Submit</Button>
            <Link to="/" style={{color:"inherit",textDecoration:"none",fontSize:"17px",marginLeft:"5px"}}>Cancel</Link>
          </div>
      </form>
      </Paper>
    )
}
