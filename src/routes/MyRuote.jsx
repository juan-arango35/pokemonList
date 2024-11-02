import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginInit from "../pages/pokemon/LoginInit";
import Home from "../pages/Home/Home";
import TictacToe from "../pages/titac/TictacToe"


const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemons" element={<LoginInit />} />
        <Route path="/tictactoe" element={<TictacToe/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
