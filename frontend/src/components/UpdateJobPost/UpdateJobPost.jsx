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
import DatePicker from "../DatePicker/DatePicker"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2em",
  },
  rows: {
    margin: "2em 0",
    display: "flex",
  },
  inputs: {
    marginRight: "2em",
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
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
    dateApplied: jobpost ? jobpost.dateApplied : "",
  })

  const [isApplied, setIsApplied] = useState(
    jobpost.dateApplied !== "N/A" ? true : false
  )

  const submit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSwitch = (e) => {
    setIsApplied(e.target.checked)
    if (!e.target.checked) {
      setFormData({ ...formData, dateApplied: "" })
    }
  }

  const {
    title,
    company,
    location,
    postLink,
    contactInfo,
    description,
    requirements,
  } = formData

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Update Job Post
      </Typography>
      <form autoComplete="on" onSubmit={submit}>
        <div className={classes.rows}>
          <TextField
            className={classes.inputs}
            label="Title"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.inputs}
            label="Company"
            name="company"
            value={company}
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.inputs}
            label="Location"
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.rows}>
          <TextField
            className={classes.inputs}
            label="Post Link"
            name="postLink"
            value={postLink}
            onChange={handleChange}
          />
          <TextField
            className={classes.inputs}
            label="Contact Info"
            name="contactInfo"
            value={contactInfo}
            onChange={handleChange}
          />
          <TextField
            className={classes.inputs}
            label="Requirements"
            name="requirements"
            value={requirements}
            onChange={handleChange}
          />
        </div>
        <div className={classes.rows}>
          <FormControlLabel
            className={classes.inputs}
            value="top"
            control={
              <Switch
                color="primary"
                name="applied"
                checked={isApplied}
                onChange={handleSwitch}
              />
            }
            label="Applied"
            labelPlacement="top"
          />
          {isApplied && (
            <DatePicker
              setDate={(date) =>
                setFormData({ ...formData, dateApplied: date })
              }
            />
          )}
        </div>
        <div className={classes.rows}>
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
        <div className={classes.alignRight}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </div>
      </form>
    </Paper>
  )
}

export default UpdateJobPost
