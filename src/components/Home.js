import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Profile from './Profile';
import Tabs from '@mui/material/Tabs';
import Posts from './Posts';
import { Link } from '@mui/material';
// import { getThemeProps } from '@mui/system';

export default function Home(props) {
  if(props.isLoggedIn === "true")
    return (
    <>
    <Box sx={{ width: '100%' }}>
      <Tabs aria-label="nav tabs example">
      <Button color="inherit" href=''>Home</Button>
      <Button color="inherit" href='login'><Link to="/login">Login</Link></Button>
      <Button color="inherit" href='signup'><Link to="/signup">Sign Up</Link></Button>
      </Tabs>
    </Box>
          
    <Profile/>
    <h3>Recent Posts</h3>
    <Posts/><br/>
    <Posts/><br/>
    <Posts/>

    </>
  );
  else 
      return(
        <>
        <p>Please login or signup to view posts.</p>
      <Button color="inherit" href='login'><Link to="/login">Login</Link></Button>
      <Button color="inherit" href='signup'><Link to="/signup">Sign Up</Link></Button>
        </>
      )
}


