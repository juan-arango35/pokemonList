import { useEffect, useState } from "react";

const Search = ({ username }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokeEncontrado, setPokeEncontrado] = useState("") // estado para la busqueda
  const [pokeFiltrado, setPokeFiltrado] = useState([]) // estado para el pokemon filtrado
  useEffect(() => {
    if (username) {
      //observacion tal ves pueda ser getItem
      localStorage.setItem("username", username);
    }
    console.log(username, "username");
  }, [username]);

  //capturamos los pokemones de la pokeapi
  useEffect(() => {
    const buscarPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0"
      );

      const resultadosPokemons = await response.json();
      const { results } = resultadosPokemons;

      //buscamos los datos de los pokemones- usamos el async por no esta directamente sino hay que un enlace que nos lleva a also detalles- buscamos dentro de la api
      const newPokemons = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();
        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
          weight: poke.weight,
          height: poke.height,
        };
      });

      setPokemons(await Promise.all(newPokemons));
    };
    buscarPokemon();
  }, [username]);

  //funcion para filtrar al pokemon selecionado de cuerdo al input ingresado;
  function handlechangeSearch(event){
    setPokeEncontrado(event.target.value)
  }

  //funcion para filtrar el pokemon en base al nombre
  function filtrarPokemon(){
    const filtrado=pokemons.filter((pokemon)=>pokemon.name.toLowerCase()===pokeEncontrado.toLowerCase())
    setPokeFiltrado(filtrado || null)

  }

  //funcion para colocar la primera letra en mayuscula
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //funcion para crear favorito
  

  return (
    <div className="h-80 bg-red-500 rounded-xl col-span-2 row-span-4 row-start-2">
      Search
    </div>
  );
};

export default Search;
