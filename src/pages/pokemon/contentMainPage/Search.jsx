import { useEffect, useState } from "react";
import { savePokemon } from "../utilities/savePokemon";
import { getPokemon } from "../utilities/getPokemon";
import imgWeight from "../../../assets/balanza.svg";
import imgHeight from "../../../assets/regla.svg";
import { BASE_URL } from "../utilities/config";

const Search = ({ username }) => {
  const [pokemons, setPokemons] = useState([]);
  const [favoritos, setFavoritos] = useState([]); // favoritos ya agregados
  const [pokeEncontrado, setPokeEncontrado] = useState(""); // estado para la el termino de la busqueda
  const [pokeFiltrado, setPokeFiltrado] = useState([]); // estado para el pokemon filtrado
  const [eliminado, setEliminado] = useState(null); //estado para el pokemon eliminado
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
      console.log(results, "spy result");

      //buscamos los datos de los pokemones- usamos el async por no esta directamente sino hay que un enlace que nos lleva a also detalles- buscamos dentro de la api
      const newPokemons = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        console.log(response, "soy response")
        const poke = await response.json();
        console.log(poke, "soy poke")
        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
          type:poke.types.map(lostipos=>lostipos.type.name).join(" "),
          weight: poke.weight,
          height: poke.height,
        };
      });

      setPokemons(await Promise.all(newPokemons));
    };
    buscarPokemon();
  }, [username]);

  //funcion para filtrar al pokemon selecionado de cuerdo al input ingresado;
  function handlechangeSearch(event) {
    setPokeEncontrado(event.target.value);
  }

  //funcion para filtrar el pokemon en base al nombre
  function filtrarPokemon() {
    const filtrado = pokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === pokeEncontrado.toLowerCase()
    );
    setPokeFiltrado(filtrado || null);
  }

  //funcion para colocar la primera letra en mayuscula
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
  //funcion para crear favorito
  async function agregarFavoritos() {
    //obtenemos el usuario de localsotrage
    const username = localStorage.getItem("username");
    //creamos un nuevo objeto del filtrado de favoritos
    const pokemon = pokeFiltrado;
    if (!pokemon) {
      console.error("No se ha encontrado un Pokémon en pokeFiltrado.");
      return;
    }

    const newFavoritePokemon = {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.type.split(""),
      avatarUrl: pokemon.img,
    };
    savePokemon(username, newFavoritePokemon);
  }

  //consultar los pokemones favoritos
  //comporobarv que el pokemon que se esta buscando si se ala eliminar, si no no hace nada

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      newFavorites(username);
    }
  }, []);

  //funcion para agregar un nuevo favorito
  async function newFavorites(username) {
    const traidos = await getPokemon(username);
    console.log(traidos);
    setFavoritos(traidos.data || null);
  }

  // funcion para eliminar favoritos- en la funcion original no se agrega el id tal ves por eso no elimina el favorito- aqui si se agrega

  async function eliminarFavoritos(id) {
    const username = localStorage.getItem("username");
    const url = `${BASE_URL}/${username}/favorites`;
    const options = {
      method: "DELETE",
      header: {
        "User-Agent": "insomnia/2023.5.8",
      },
    };
    fetch(url, options)
      .then((response) => setEliminado(favoritos))
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }
  return (
    <div className="h-80 bg-red-500 rounded-xl col-span-2 row-span-4 row-start-2">
      {/*    renderizado del buscador */}
      <div>
        <h2>Buscador</h2>
        <input
          type="text"
          placeholder="ingrese el nombre del pokemon"
          value={pokeEncontrado}
          onChange={handlechangeSearch}
          className="bg-slate-500"
        />
        <button onClick={filtrarPokemon}>buscar</button>
      </div>

      <div>
        {pokeFiltrado && pokeFiltrado.id ? (
          <div>
            <div>
              <h2>{capitalizeFirstLetter(pokeFiltrado.name)}</h2>
              <p>#00{pokeFiltrado.id}</p>
            </div>
            <img src={pokeFiltrado.img} alt={pokeFiltrado.name} />
            <div>
              {/* esto es para ver el tipo */}
              {pokeFiltrado.type.split("").map((type, index) => {
                return <p>{type}</p>;
              })}
            </div>
            <div>
              {/* contendio de datos */}
              <div>
                <img src={imgWeight} alt="balanza" />
                <span>{pokeFiltrado.weight / 10} kg</span>
              </div>
              <div>
                <img src={imgHeight} alt="regla" />
                <span>{pokeFiltrado.height / 10} m</span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>Pokemon no encontrado</p>
          </div>
        )}
      </div>
      <button onClick={agregarFavoritos}>Agregar favoritos</button> <br/>
      <button onClick={()=>eliminarFavoritos(favoritos.id)} >eliminar de favoritos</button>
    </div>
  );
};

export default Search;
