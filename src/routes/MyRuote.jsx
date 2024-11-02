import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginInit from "../pages/pokemon/LoginInit";


const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sesion" element={<LoginInit />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
