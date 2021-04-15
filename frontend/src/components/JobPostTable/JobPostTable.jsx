import React, { useEffect, useState } from "react"
import { DataGrid, GridToolbar } from "@material-ui/data-grid"
import { Paper, IconButton } from "@material-ui/core"
// import {
//   randomCreatedDate,
//   randomUpdatedDate,
// } from "@material-ui/x-grid-data-generator"

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
  { field: "description", headerName: "Description", width: 200 },
  {
    field: "dateApplied",
    headerName: "Date of Application",
    width: 200,
    valueFormatter: (params) => {
      return params.value
    },
  },
]

const formatDate = (string) => {
  let formattedStr = string
}

export default function DataTable({ jobposts, getRowData }) {
  const [loading, setLoading] = useState(true)
  // const [selection, setSelection] = useState({})

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
          // checkboxSelection
          components={{ Toolbar: GridToolbar }}
          // onCellClick={() => console.log("cell")}
          onRowSelected={(data) => getRowData(data)}
        />
      )}
    </Paper>
  )
}
