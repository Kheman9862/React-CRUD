import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default function Navbar() {


    return (
        <div>
        <AppBar position="static" style={{width:"100%",marginRight:"400px"}}>
        <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="h6">
            My Team
          </Typography>
          <Link style={{color:"inherit",textDecoration:"none"}} to="/add">Add User</Link>
        </Toolbar>
      </AppBar>
    </div>
    )
}
