import { ReactChild } from "react";
import { Route, Routes } from "react-router-dom";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";

interface AuxProps {
  children: ReactChild;
}

const AppRouter = ({ children }: AuxProps) => (
  <div>
    {children}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Help />} />
    </Routes>
  </div>
);

export default AppRouter;
