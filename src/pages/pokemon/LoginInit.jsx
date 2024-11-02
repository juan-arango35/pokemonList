import { useState } from "react";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

//colocamos las constantes de sesionç
const LOGIN = "login";
const SESSION = "session";

const LoginInit = () => {
  const [paginaActual, setPaginaActual] = useState(LOGIN);

  //esta funcion que maneja el incio de ssion
  const handleSumbit = (respuesta) => {
    setPaginaActual(respuesta ? SESSION : LOGIN);
  };

  // funcion que redirecciona a la pagina de sesion

  function redireccionaLogin() {
    setPaginaActual(LOGIN);
  }

  return (
    <div className="bg-white-500 h-screen text-blue-300">
      {/* si el estado es LOGIN mostrara login page */}
      {paginaActual === LOGIN && <LoginPage submit={handleSumbit} />}
      {/*       Si el estado es session mostara mainPAge */}
      {paginaActual === SESSION && (
        <MainPage redireccionaLogin={redireccionaLogin} />
      )}
    </div>
  );
};

export default LoginInit;
