import { BASE_URL } from "./config";

const getPokemon = (username) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "insomnia/8.3.0",
    },
  };

  const data = fetch(`${BASE_URL}/${username}/favorites`)
    .then((response) => response.json())
    .then((datos) =>{
      console.log(datos)
        return datos
    })
    .catch((error) => console.error(error));

  return data;
};

export{ getPokemon };
