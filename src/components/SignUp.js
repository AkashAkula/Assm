import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class SignUp extends React.Component{
  constructor(){
    super();
    this.state={
      username:"",
      email:"",
      password:"",
      confirmpassword:""
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
    if(this.state.username===''){
      alert('please enter  username')
    }
    const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(this.state.email==='' || regex.test(this.state.email) === false){
      alert('please enter valid email')
    }
    const password = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    if(this.state.password==='' || password.test(this.state.password)===false){
      alert('please enter  password min 8 characters')
    }
    if(this.state.password===this.state.confirmpassword){
      alert('please enter same password')
    }
  }
  render(){
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
      <TextField id="username" name="username" label="Enter Name" variant="outlined" value={this.state.username} onChange={this.handleChange} /><br/><br/>
      <TextField id="email" name="email" label="Enter EmailID" variant="outlined" value={this.state.email} onChange={this.handleChange} /><br/><br/>
      <TextField id="password" name="password"label="Enter Password" variant="outlined" value={this.state.password} onChange={this.handleChange}/><br/><br/>
      <TextField id="confirmpassword" name="confirmpassword"label="Confirm Password" variant="outlined" value={this.state.confirmpassword} onChange={this.handleChange}/><br/><br/>
      <Button variant="contained" href="#" onClick={this.validateForm}>Submit</Button>
      <p>Already have a account. Just Log In!</p>
      <Button variant="contained" href="login">Login</Button><br/>

    </div>
    </Box>
  )
 }
}