import "./App.css";
import { Routes, Route } from "react-router-dom";

// Fonts for Material UI components
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./style/theme";
import { ThemeProvider } from "@mui/material/styles";
import Todo from "./screens/todo/todo";
import Todo2 from "./screens/todo2/todo2";
import WithHeader from "./layout/withHeader";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={WithHeader(<Todo />)} />
        <Route path="/todo-2" element={<Todo2 />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
