import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import {
  Paper,
  Typography,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1em",
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: "200px",
    },
  },
}))

const UpdateJobPost = ({ onSubmit, jobpost }) => {
  const classes = useStyles()
  const [formData, setFormData] = useState({
    title: jobpost ? jobpost.title : "",
    company: jobpost ? jobpost.company : "",
    location: jobpost ? jobpost.location : "",
    postLink: jobpost ? jobpost.postLink : "",
    contactInfo: jobpost ? jobpost.contactInfo : "",
    description: jobpost ? jobpost.description : "",
  })

  const submit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const {
    title,
    company,
    location,
    postLink,
    contactInfo,
    description,
  } = formData

  return (
    <Paper className={classes.root}>
      <Typography>Add New Job Post</Typography>
      <form noValidate autoComplete="off" onSubmit={submit}>
        <div>
          <TextField
            label="Title"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
          <TextField
            label="Company"
            name="company"
            value={company}
            onChange={handleChange}
            required
          />
          <TextField
            label="Location"
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <TextField
            label="Post Link"
            name="postLink"
            value={postLink}
            onChange={handleChange}
          />
          <TextField
            label="Contact Info"
            name="contactInfo"
            value={contactInfo}
            onChange={handleChange}
          />
          <FormControlLabel
            value="top"
            control={
              <Switch color="primary" name="applied" onChange={handleChange} />
            }
            label="Applied"
            labelPlacement="top"
          />
        </div>
        <div>
          <TextField
            id="standard-multiline-static"
            label="Job Description"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
          />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="outlined"
          />
        </div> */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Create
        </Button>
      </form>
    </Paper>
  )
}

export default UpdateJobPost
