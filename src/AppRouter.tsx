import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";

const AppRouter: React.FC = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Help />} />
    </Routes>
  </>
);

export default AppRouter;
