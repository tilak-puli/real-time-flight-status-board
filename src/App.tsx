import "./App.css";
import { Routes, Route } from "react-router-dom";

// Fonts for Material UI components
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./style/theme";
import { ThemeProvider } from "@mui/material/styles";
import WithHeader from "./layout/WithHeader";
import FlightsList from "./screens/FlightsList/FlightsList";
import FlightDetails from "./screens/FlightDetails/FlightDetails";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={WithHeader(<FlightsList />)} />
        <Route
          path="/flight-details/:id"
          element={WithHeader(<FlightDetails />)}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
