// src/App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Background from "./components/Background";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import ProjectPage from "./pages/ProjectPage";

const App: React.FC = () => {
    const getInitialMode = () => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // stored as string, so we convert to boolean
  };

  const [darkMode, setDarkMode] = useState(getInitialMode);

  // Step 2: When darkMode changes, update localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Background />
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
