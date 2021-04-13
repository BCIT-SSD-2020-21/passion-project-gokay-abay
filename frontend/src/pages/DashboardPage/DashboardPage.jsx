import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import JobPostTable from "../../components/JobPostTable/JobPostTable"
import { getAllJobPosts } from "../../api/jobPosts"
import CircularProgress from "@material-ui/core/CircularProgress"
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

  useEffect(() => {
    ;(async () => {
      const res = await getAllJobPosts()
      setJobposts(res)
      setTimeout(() => setLoading(false), 1000)
    })()
  }, [])

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
          <Modal children={<NewJobPost />} />
        </>
      )}
    </div>
  )
}

export default DashboardPage
