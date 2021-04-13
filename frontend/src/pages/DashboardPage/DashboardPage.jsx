import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { createJobPost, getAllJobPosts } from "../../api/jobPosts"
import CircularProgress from "@material-ui/core/CircularProgress"
import JobPostTable from "../../components/JobPostTable/JobPostTable"
import Modal from "../../components/Modal/Modal"
import NewJobPost from "../../components/NewJobPost/NewJobPost"

const useStyles = makeStyles((theme) => ({
  loading: {
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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

  return (
    <div>
      {loading ? (
        <div className={classes.loading}>
          <h2>Loading...</h2>
          <CircularProgress />
        </div>
      ) : (
        <>
          <JobPostTable jobposts={jobposts} />
          <Modal>
            <NewJobPost onSubmit={submit} />
          </Modal>
        </>
      )}
    </div>
  )
}

export default DashboardPage
