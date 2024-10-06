# InsightBoard Dashboard Documentation

- Project Overview

InsightBoard is a data visualization dashboard that displays a Bubble Chart and a Data Grid. The Bubble Chart represents data points where the size of each bubble is tied to a specific metric (e.g., revenue or population). The Data Grid displays the same data in a sortable, filterable table. Both the chart and grid interact with each other: clicking on a bubble filters the data shown in the grid.

# Installation

- Node version : 21
- CMD:
  FOR Mac,
  sudo npm install
  For Windows,
  npm install

- Run Application: sudo npm run dev or npm run dev

# Features

- Bubble Chart Visualization: Displays data with bubble sizes and positions representing two key metrics (e.g., population and revenue).
- Data Grid: A tabular representation of the same data that can be filtered and sorted.
- Interactive Filters: Users can filter the data displayed by using a slider (for revenue) and clicking on bubbles (which filters the grid automatically).
- Responsive Layout: The UI adjusts based on screen size, making it suitable for different devices.
- Built using React: The core of the application is built using modern React principles (hooks, functional components).
- Recharts for Visualization: The Bubble Chart is powered by Recharts, a popular charting library.
- Material UI for Styling: Material UI components are used for consistent design and user experience.

# Technologies Used

- ReactJS: Frontend library used for building the user interface.
- Recharts: Used for rendering the bubble chart in a clean, responsive format.
- Material UI (MUI): Provides pre-built components for the user interface, such as buttons, typography, sliders, and layout components.
- Vite: Used as the development build tool for faster builds and optimized performance.
