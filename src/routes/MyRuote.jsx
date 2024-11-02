import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginInit from "../pages/pokemon/LoginInit";
import Home from "../pages/Home/Home";


const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sesion" element={<LoginInit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
