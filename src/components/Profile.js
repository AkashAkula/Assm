import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default class Profile extends React.Component{
  constructor(){
    super();
    this.state={enableEdit:false}
    this.enableEditComponent=this.enableEditComponent.bind(this);
    this.disableEditComponent=this.disableEditComponent.bind(this);
  }
  enableEditComponent(){
    console.log(this.state.enableEdit);
    this.setState({
      enableEdit:true
    })
  }
  disableEditComponent(){
    this.setState({
      enableEdit:false
    })
  }
  render(){
  if(this.state.enableEdit)
  return (
    <div>
      Name:<input type="text"/><br/><br/>
      Age:<input type="number"/><br/><br/>
      Interests:<input type="text"/><br/><br/>
      <Button onClick={this.disableEditComponent}>Done</Button>
    </div>
  )
  else
    return(
      <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="https://media.gettyimages.com/photos/season-3-pictured-steve-carell-as-michael-scott-picture-id138412921?k=20&m=138412921&s=612x612&w=0&h=3J78xzTXI7cr1J_G3JwTWIwKz0MP-3RoKv_0ucMo7ZU="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Michael Scott
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Name: Michael Scott<br/>
           Email Id: killtoby@gmail.com<br/>
           Age: 45<br/>
           Interests: Holly Flax, Gossips, procrastination, distraction.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={this.enableEditComponent}>
          Edit Profile
        </Button>
      </CardActions>
    </Card>
      </div>
    )
}
}