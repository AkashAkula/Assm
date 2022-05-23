import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormControl } from '@mui/material/FormControl';


class Login extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }
    this.handleChange=this.handleChange.bind(this);
    this.validateForm=this.validateForm.bind(this);

  }
  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  validateForm(e){
      e.preventDefault();
      const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(this.state.email==='' || regex.test(this.state.email) === false){
        alert('please enter valid email')
      }
      if(this.state.password===''){
        alert('please enter  password')
      }
    }
  render() {
    return (
      <>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
    <div>
      <TextField id="emailInput" name='email' label="Enter EmailID" variant="outlined" value={this.state.email} onChange={this.handleChange}/><br/><br/>
      <TextField id="passwordInput" name='password' label="Enter Password" variant="outlined" value={this.state.password} onChange={this.handleChange}/><br/><br/>
      <Button variant="contained" href="#" onClick={this.validateForm}>Submit</Button>
      <p>New User! Create account.</p><Button variant="contained" href="signup">Register</Button>
    </div>

    </Box>
   
      </>
    )
  }
}

export default Login;