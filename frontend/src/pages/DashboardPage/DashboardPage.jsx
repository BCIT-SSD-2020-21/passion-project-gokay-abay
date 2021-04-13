import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { createJobPost, getAllJobPosts } from "../../api/jobPosts"
import CircularProgress from "@material-ui/core/CircularProgress"
import JobPostTable from "../../components/JobPostTable/JobPostTable"
import Modal from "../../components/Modal/Modal"
import NewJobPost from "../../components/NewJobPost/NewJobPost"
import { IconButton } from "@material-ui/core"
import Fab from "@material-ui/core/Fab"
import EditIcon from "@material-ui/icons/Edit"
import AddIcon from "@material-ui/icons/Add"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1em",
    // backgroundColor: "#F5F5F5",
    minHeight: "100vh",
  },
  loading: {
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "1em",
  },
}))

const DashboardPage = () => {
  const classes = useStyles()

  const [jobposts, setJobposts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => fetchData(), [])

  const submit = async (formData) => {
    await createJobPost(formData)
    fetchData()
  }

  const fetchData = async () => {
    setLoading(true)
    const res = await getAllJobPosts()
    setJobposts(res)
    setTimeout(() => setLoading(false), 1000)
  }

  const getRowData = (data) => {
    console.log(data)
  }

  return (
    <div>
      {loading ? (
        <div className={classes.loading}>
          <h2>Loading...</h2>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.root}>
          <div className={classes.buttons}>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
            <Fab color="primary" aria-label="edit">
              <AddIcon />
            </Fab>
          </div>
          <JobPostTable jobposts={jobposts} getRowData={getRowData} />
          <Modal>
            <NewJobPost onSubmit={submit} />
          </Modal>
        </div>
      )}
    </div>
  )
}

export default DashboardPage
