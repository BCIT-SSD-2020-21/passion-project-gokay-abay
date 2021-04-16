import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  createJobPost,
  getAllJobPosts,
  updateJobPost,
  deleteJobPost,
} from "../../api/jobPosts"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Typography } from "@material-ui/core"
import JobPostTable from "../../components/JobPostTable/JobPostTable"
import Modal from "../../components/Modal/Modal"
import NewJobPost from "../../components/NewJobPost/NewJobPost"
import UpdateJobPost from "../../components/UpdateJobPost/UpdateJobPost"
import Fab from "@material-ui/core/Fab"
import EditIcon from "@material-ui/icons/Edit"
import AddIcon from "@material-ui/icons/Add"
import DeleteIcon from "@material-ui/icons/Delete"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1em",
    // backgroundColor: "#F5F5F5",
    // minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
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
  const [addClicked, setAddClicked] = useState()
  const [editClicked, setEditClicked] = useState(false)

  const [rowData, setRowData] = useState({})

  useEffect(() => fetchData(), [])

  const submitNew = async (formData) => {
    await createJobPost(formData)
    fetchData()
    setRowData({})
  }

  const submitUpdate = async (formData) => {
    await updateJobPost(formData, rowData.data._id)
    fetchData()
    setRowData({})
  }

  const deleteClicked = async () => {
    await deleteJobPost(rowData.data._id)
    fetchData()
    setRowData({})
  }

  const fetchData = async () => {
    setLoading(true)
    const res = await getAllJobPosts()
    setJobposts(res)
    setTimeout(() => setLoading(false), 1000)
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
          <div className={classes.header}>
            <div style={{ alignSelf: "center" }}>
              <Typography variant="h4">My Job Applications</Typography>
            </div>
            <div className={classes.buttons}>
              {rowData.isSelected && (
                <div>
                  <Fab
                    onClick={() => {
                      setEditClicked(!editClicked)
                    }}
                    color="secondary"
                    aria-label="edit"
                    style={{ marginRight: "1em", backgroundColor: "orange" }}
                  >
                    <EditIcon />
                  </Fab>
                  <Fab
                    color="secondary"
                    aria-label="edit"
                    onClick={() => deleteClicked()}
                    style={{ marginRight: "1em" }}
                  >
                    <DeleteIcon />
                  </Fab>
                </div>
              )}
              <Fab
                color="primary"
                aria-label="edit"
                onClick={() => setAddClicked(!addClicked)}
              >
                <AddIcon />
              </Fab>
            </div>
          </div>
          <JobPostTable
            jobposts={jobposts}
            getRowData={(data) => setRowData(data)}
          />
          <Modal addClicked={addClicked}>
            <NewJobPost onSubmit={submitNew} />
          </Modal>
          <Modal editClicked={editClicked}>
            <UpdateJobPost onSubmit={submitUpdate} jobpost={rowData.data} />
          </Modal>
        </div>
      )}
    </div>
  )
}

export default DashboardPage
