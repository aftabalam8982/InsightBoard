import { Box, Typography } from "@mui/material";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const BubbleChart = ({ data, onBubbleClick }) => {
  data.map((item) => {
    if (!item.revenue || !item.population) {
      throw new Error("Data point missing revenue or population");
    }
  });

  return (
    <Box>
      <Typography variant='h5'>Bubble Chart</Typography>
      <ScatterChart width={400} height={400} style={{ padding: "1rem" }}>
        <CartesianGrid />
        <XAxis
          dataKey='population'
          name='Population'
          label={{
            value: "Population",
            position: "insideBottom",
            offset: -5,
          }}
        />
        <YAxis
          dataKey='revenue'
          name='Revenue'
          label={{
            value: "Revenue",
            angle: -90,
            position: "insideLeft",
            offset: 0,
          }}
        />
        <Tooltip />
        <Scatter
          data={data}
          fill='#8884d8'
          onClick={(e) => {
            if (e && e.payload) onBubbleClick(e.payload);
          }}
        />
      </ScatterChart>
    </Box>
  );
};

export default BubbleChart;
