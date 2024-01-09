import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />}></Route>
        <Route exact path="/video/:id" element={<VideoDetail />}></Route>
        <Route exact path="/channel/:id" element={<ChannelDetail />}></Route>
        <Route
          exact
          path="/search/:searchTerm"
          element={<SearchFeed />}
        ></Route>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
