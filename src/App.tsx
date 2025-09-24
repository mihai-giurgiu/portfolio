import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Background from "./components/Background";
import { Box, ThemeProvider, createTheme, CssBaseline, IconButton } from "@mui/material";
import ProjectPage from "./pages/ProjectPage";

const App: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  // Create theme based on current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: {
                  default: "#121212",
                  paper: "rgba(255, 255, 255, 0.08)",
                },
              }
            : {
                background: {
                  default: "#fafafa",
                  paper: "#fff",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Applies background/text colors depending on mode */}
      <Router>
        <Background />
        <Header />

        <Box sx={{ width: "100%", py: 6 }}>
          <Box
            sx={{
              maxWidth: 1300,
              mx: "auto",
              px: 3,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
            </Routes>
            <Footer />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
