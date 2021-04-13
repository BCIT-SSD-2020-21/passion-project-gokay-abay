import React, { useEffect, useState } from "react"
import { DataGrid, GridToolbar } from "@material-ui/data-grid"
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

  // {
  //   field: "age",
  //   headerName: "Age",
  //   type: "number",
  //   width: 90,
  // },
]

const rows = [
  { age: 35, id: 1, firstName: "Jon", lastName: "Snow" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
]

export default function DataTable({ jobposts }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    jobposts.forEach((post, index) => {
      post["id"] = index
    })
    console.log(jobposts)
    setLoading(false)
  }, [])

  return (
    <div style={{ height: 400, width: "100%" }}>
      {!loading && (
        <DataGrid
          rows={jobposts}
          columns={columns}
          pageSize={5}
          // checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      )}
    </div>
  )
}
