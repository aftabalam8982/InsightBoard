import { Box, Button, Typography } from "@mui/material";
import { useState, useCallback } from "react";
import InputComponent from "./InputComponent";

const FilterComponent = ({ onFilterChange }) => {
  const [revenueRange, setRevenueRange] = useState([0, 100000]);
  const [isInputTrue, setIsInputTrue] = useState(false);

  const handleFilterChange = useCallback(() => {
    onFilterChange({ revenue: revenueRange });
  }, [onFilterChange, revenueRange]);

  const handleDoubleClick = useCallback(() => {
    setIsInputTrue(true);
  }, []);

  return (
    <Box
      sx={{
        marginBottom: "1rem",
        border: "1px solid grey",
        paddingBottom: "1rem",
        textAlign: "center",
      }}
    >
      <Typography variant='h5' sx={{ padding: "1rem" }}>
        Filter by Revenue
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <InputComponent
          type='range'
          revenueRange={revenueRange}
          setRevenueRange={setRevenueRange}
          setIsInputTrue={setIsInputTrue}
        />
        {isInputTrue ? (
          <InputComponent
            type='number'
            revenueRange={revenueRange}
            setRevenueRange={setRevenueRange}
          />
        ) : (
          <Box
            onDoubleClick={handleDoubleClick}
            sx={{
              border: "1px solid lightBlue",
              borderRadius: "4px",
              padding: "0.2rem",
              cursor: "pointer",
            }}
          >
            {revenueRange[0]}
          </Box>
        )}
      </Box>

      <Button
        variant='outlined'
        size='small'
        onClick={handleFilterChange}
        sx={{ marginTop: "1rem" }}
      >
        Apply Filter
      </Button>
    </Box>
  );
};

export default FilterComponent;
