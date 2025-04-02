import React from "react";
import { Box } from "@mui/material";
import Heading from "../atoms/Heading";
import DashboardTable from "../molecules/DashboardTable";

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

const DashboardPage = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Heading text="Dashboard" variant="h4" />
      <DashboardTable rows={rows} columns={columns} />
    </Box>
  );
};

export default DashboardPage;
