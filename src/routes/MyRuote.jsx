import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/pokemon/LoginPage";
import LoginInit from "../pages/pokemon/LoginInit";
import Home from "../pages/Home/Home";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sesion" element={<LoginInit />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
