import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nombre", width: 130 },
  { field: "age", headerName: "Edad", width: 90 },
];

const rows = [
  { id: 1, name: "Juan", age: 35 },
  { id: 2, name: "María", age: 42 },
  { id: 3, name: "Pedro", age: 28 },
  { id: 4, name: "Ana", age: 22 },
  { id: 5, name: "Diego", age: 28 },
];

function Dashboard() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default Dashboard;
