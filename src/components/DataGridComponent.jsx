import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { memo } from "react";
import { columns } from "../constants/appData";

const DataGridComponent = ({ filteredData }) => {
  return (
    <Box
      style={{
        height: 450,
        width: "100%",
        marginBottom: "1.5rem",
      }}
    >
      <Typography variant='h5'>Table Grid</Typography>
      <DataGrid rows={filteredData} columns={columns} pageSize={5} />
    </Box>
  );
};

export default memo(DataGridComponent);
