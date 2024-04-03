import React, { useState } from 'react'
import { Grid,TextField,Button } from '@mui/material'
import axios from 'axios';
const Addblog = () => {
  const [post,setPost] = useState();
  const inputHandler = (e)=>{
    setPost({ ...post,[e.target.name]:e.target.value})

  }
  const addData = ()=>{
    console.log(post)
    axios.post("http://localhost:3005/api/add",post)
    .then((res)=>{
      alert(res.data.message)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div style={{margin:'10% 20% 20%'}}>
        <Grid container spacing={2}>
    <Grid item xs={12}>
      <TextField fullWidth 
      label='post title'
       name='title'
       onChange={inputHandler}
      ></TextField>
    </Grid>
    <Grid item xs={12}>
      <TextField fullWidth 
        label='Type a post'
        multiline 
         rows={4}
         name='post'
         onChange={inputHandler}
         ></TextField>
    </Grid>
    <Grid item xs={12}>
    <TextField fullWidth l
    label='Image URL'
    name="image"
    onChange={inputHandler}
    ></TextField>
  </Grid>
  </Grid>
  <br />
  <br />
  <Button variant="contained" style={{textAlign:'center'}} color='secondary'
  onClick={addData}
  >SUBMIT</Button>
  </div>
  )
}

export default Addblog