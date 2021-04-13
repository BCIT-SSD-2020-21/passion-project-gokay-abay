import React, { useEffect, useState } from "react"
import JobPostTable from "../../components/JobPostTable/JobPostTable"
import { getAllJobPosts } from "../../api/jobPosts"
import CircularProgress from "@material-ui/core/CircularProgress"

const DashboardPage = () => {
  const [jobposts, setJobposts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const res = await getAllJobPosts()
      setJobposts(res)
      setLoading(false)
    })()
  }, [])

  return (
    <div>
      {loading ? <CircularProgress /> : <JobPostTable jobposts={jobposts} />}
    </div>
  )
}

export default DashboardPage
