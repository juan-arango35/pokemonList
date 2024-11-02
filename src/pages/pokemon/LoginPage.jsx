import { useEffect, useState } from "react";
import image from "../../assets/image 7.svg"


const LoginPage = ({ submit }) => {
  //creamos el username de ingreso
  const [username, setUsername] = useState("");

  // maneja el cambio dle input
  const handleChange = (event) => {
    event.preventDefault();
    console.log("input :", event.target.value);
    setUsername(event.target.value);
  };

  //mandamos el username a localstorage
  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    }
  }, [username]);

  //manejamos el click para el boton de submit
  const handleClick=(event)=>{
    event.preventDefault();
    if(username && username !== ""){
      submit(true);
    } else {
      submit(false)
      console.log("ingrese un isername valido")
    }
  }
  return <div>
    <div>
      <img src={image} alt="logo-incio" />
      <form>
        <input
        type="text"
        onChange={handleChange} 
        placeholder="Unsername"
        id={Math.random()}
        name="username"/>
        <button onClick={handleClick}> Ingresar</button>
      </form>
    </div>
  </div>;
};

export default LoginPage;
