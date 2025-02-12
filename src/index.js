import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route element={<App />} path="*" />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
