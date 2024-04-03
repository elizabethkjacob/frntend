import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button
} from "@mui/material";
import axios from 'axios';

const Blog = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/api/view")
      .then(res => {
        setCardData(res.data); 
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleUpdate = (id) => {
    console.log("Update clicked for blog with id:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for blog with id:", id);
  };

  return (
    <div>
      <Grid container spacing={5} margin={16}>
        {cardData.map((blog) => (
          <Grid item key={blog._id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: "290px", display: "flex", m: 2 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "100px" }}
                  component={"img"}
                  src={blog.image}
                  alt={blog.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {blog.name}
                  </Typography>
                  <Typography variant="body2">{blog.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant='contained' onClick={() => handleUpdate(blog._id)}>Update</Button>
                  <Button size="small" variant='contained' onClick={() => handleDelete(blog._id)}>Delete</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;
