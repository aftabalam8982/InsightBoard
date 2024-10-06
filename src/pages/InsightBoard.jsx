import { useState, useEffect, useCallback } from "react";
import { Container, Box, Paper } from "@mui/material";
import FilterComponent from "../components/FilterComponent";
import BubbleChart from "../components/BubbleChart";
import DataGridComponent from "../components/DataGridComponent";
import Dashboard from "../components/Dashboard";
import { data } from "../constants/appData";

const InsightBoard = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [filters, setFilters] = useState({});

  const handleBubbleClick = useCallback(
    (bubbleData) => {
      setFilters({ ...filters, category: bubbleData.category });
    },
    [setFilters]
  );

  const handleFilterChange = useCallback(
    (newFilters) => {
      console.log(newFilters, filters);
      setFilters({ ...filters, ...newFilters });
    },
    [setFilters]
  );

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        (!filters.revenue ||
          (item.revenue && item.revenue >= filters.revenue[0])) &&
        (!filters.category || item.category === filters.category)
      );
    });
    setFilteredData(filtered);
  }, [filters]);

  return (
    <Dashboard>
      <Container>
        <header style={{ textAlign: "center", padding: "20px" }}>
          <h1>InsightBoard</h1>
        </header>

        <Box sx={{ marginBottom: 2 }}>
          <FilterComponent onFilterChange={handleFilterChange} />
        </Box>

        <Box
          display='flex'
          justifyContent='space-between'
          flexWrap='wrap'
          gap={2}
        >
          <Box flex={1} minWidth={300}>
            <Paper style={{ padding: "20px" }}>
              <BubbleChart
                data={filteredData}
                onBubbleClick={handleBubbleClick}
              />
            </Paper>
          </Box>
          <Box flex={1} minWidth={300}>
            <Paper style={{ padding: "20px" }}>
              <DataGridComponent filteredData={filteredData} />
            </Paper>
          </Box>
        </Box>

        <footer
          style={{ textAlign: "center", padding: "20px", marginTop: "20px" }}
        >
          <p>&copy; 2024 InsightBoard</p>
        </footer>
      </Container>
    </Dashboard>
  );
};

export default InsightBoard;
