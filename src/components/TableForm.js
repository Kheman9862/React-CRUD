import React,{useContext} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { SharedContext } from '../Shared/context';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

// Styling 
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 610,
      backgroundColor: theme.palette.background.paper,
      maxHeight: 300,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  }));
  


export default function TableForm() {
const classes = useStyles(); //initializing styles
const {users,deleteData} = useContext(SharedContext); //subscribing to the values from the context

// Printing out the list of users
const body = (
        <List className={classes.root}>
        {users.map((val)=>(
            <div key={val.id}>
                <ListItem>
                    <ListItemText primary={val.name} style={{fontWeight:"bold"}}/>
                    <Link to={`/edit/${val.id}`} style={{color:"inherit",textDecoration:"none",fontSize:"16px",marginBottom:"2px"}}>Edit</Link>
                    <Button onClick={() => deleteData(val.id)} color="inherit">Delete</Button>
              </ListItem>
            </div>
        ))}
        </List>
    )
    return (
<div>
        {users.length>0?(body):(<h3>No List</h3>)}
        </div>
    )
}
