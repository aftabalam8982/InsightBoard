import { Box } from "@mui/material";
import InsightBoard from "../pages/InsightBoard";
import { data } from "../constants/appData";

const Dashboard = ({ children }) => {
  return (
    <Box>
      {children}
      {/* <InsightBoard
        data={filteredData}
        onBubbleClick={handleBubbleClick}
        onFilterChange={handleFilterChange}
      /> */}
    </Box>
  );
};

export default Dashboard;
