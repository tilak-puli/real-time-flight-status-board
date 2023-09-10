// App.jsx
import "./App.css";

// Fonts for Material UI components
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./style/theme";
import { ThemeProvider } from "@mui/material/styles";
import Todo from "./screens/todo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Todo />
    </ThemeProvider>
  );
}

export default App;
