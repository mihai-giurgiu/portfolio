import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Background from "./components/Background";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
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
          </Routes>
          <Footer />
        </Box>
      </Box>
    </Router>
  );
};

export default App;
