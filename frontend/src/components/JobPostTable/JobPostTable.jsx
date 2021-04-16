import React, { useEffect, useState } from "react"
import { DataGrid, GridToolbar } from "@material-ui/data-grid"
import { Paper } from "@material-ui/core"

const columns = [
  { field: "id", hide: true },
  { field: "title", headerName: "Position", width: 200 },
  { field: "company", headerName: "Company", width: 130 },
  { field: "location", headerName: "Location", width: 130 },
  {
    field: "postLink",
    headerName: "Post Link",
    width: 130,
    renderCell: (params) => (
      <a href={params.value} target="_blank" rel="noreferrer">
        {params.value}
      </a>
    ),
  },
  {
    field: "contactInfo",
    headerName: "Contact Info",
    width: 150,
    renderCell: (params) => (
      <a href={`mailto:${params.value}`} target="_blank" rel="noreferrer">
        {params.value}
      </a>
    ),
  },
  {
    field: "dateApplied",
    headerName: "Date Applied",
    width: 150,
    valueFormatter: (params) => {
      return params.value
    },
  },
  { field: "description", headerName: "Description", width: 200 },
]

export default function DataTable({ jobposts, getRowData }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (jobposts) {
      jobposts.forEach((post, index) => {
        post["id"] = index
      })
      console.log(jobposts)
      setLoading(false)
    }
  }, [])

  return (
    <Paper style={{ height: 400, width: "100%" }}>
      {!loading && (
        <DataGrid
          rows={jobposts}
          columns={columns}
          pageSize={5}
          components={{ Toolbar: GridToolbar }}
          onRowSelected={(data) => getRowData(data)}
        />
      )}
    </Paper>
  )
}
