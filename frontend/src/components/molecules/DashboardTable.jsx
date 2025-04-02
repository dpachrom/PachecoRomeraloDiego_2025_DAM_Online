import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const DashboardTable = ({
  rows,
  columns,
  pageSize = 5,
  rowsPerPageOptions = [5],
  checkboxSelection = true,
  height = 400,
  width = "80%",
}) => {
  return (
    <Box sx={{ height, width }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        checkboxSelection={checkboxSelection}
      />
    </Box>
  );
};

export default DashboardTable;
