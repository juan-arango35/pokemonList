import { BASE_URL } from "./config";


const savePokemon = (username, pokemonData) => {
    const options={
        method:"POST",
        headers:{
            "Content-Type": "aplication/json",
            "User-Agent": "insomnia/8.3.0"
        },
        body:JSON.stringify(pokemonData)
    }

    const url=`${BASE_URL}/${username}/favorites`;
    console.log(options)
    const data=fetch(url, options)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data)
        return data
    })
    .catch((error) => console.error(error));
  return (
    data
  )
}

export {savePokemon}