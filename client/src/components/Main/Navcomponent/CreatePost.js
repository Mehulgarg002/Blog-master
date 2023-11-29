import React from 'react'
import { useFormik } from "formik";
import axios from 'axios';
import {
  Button,
  CardContent,
  Card,
  Grid,
  TextField,
  CardActions,
} from "@mui/material";
import Navbar from './Navbar';


const CreatePost = () => {
 
  const id = localStorage.getItem('userId')
  const SubmitHandler = async () => {
    try {
      const url = `http://localhost:4000/api/userpost`;
      await axios.post(url, values);
    } catch (error) {
      console.log(error);
    }
    values.title= ""
    values.image= ""
    values.discription= ""
    values.categoary= ""
    values.PostedBy= ""
  };
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      image: "",
      title: "",
      discription: "",
      PostedBy: "",
      user: id,
      categoary: ""
    },
    onSubmit: SubmitHandler,
  });

  return (
    <>
      <Navbar />
      <Card>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  value={values.image}
                  onChange={handleChange}
                  name="image"
                  type="text"
                  variant="outlined"
                  label="image url"
                  fullWidth
                />
              </Grid>{" "}
              <Grid xs={12} item>
                <TextField
                  value={values.title}
                  onChange={handleChange}
                  name="title"
                  type="text"
                  variant="outlined"
                  label="title"
                  fullWidth
                />
              </Grid>{" "}
              <Grid xs={12} item>
                <TextField
                  value={values.discription}
                  onChange={handleChange}
                  name="discription"
                  label={"discription"}
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </Grid>{" "}
              <Grid xs={12} item>
                <TextField
                  value={values.categoary}
                  onChange={handleChange}
                  name="categoary"
                  label={"Categoary"}
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  value={values.PostedBy}
                  onChange={handleChange}
                  name="PostedBy"
                  label={"PostedBy"}
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>{" "}
          </CardContent>{" "}
          <CardActions>
            <Grid xs={12} item>
              <Button variant="contained" type="submit">
                CREATE POST{" "}
              </Button>{" "}
            </Grid>{" "}
          </CardActions>{" "}
        </form>{" "}
      </Card>
    </>
  )
}

export default CreatePost