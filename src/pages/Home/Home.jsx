import CardInitial from "../../components/card/CardInitial"
import tictacImage from ".././../assets/img/tic-tac-toe.png"
import pokemonApi from "../../assets/img/poke-api.png"


const tarjetas=[
  {
    image:tictacImage,
    title: "tictac",
    route:"tictactoe",
    tags:[
      "useState",
      "useEffecct",
      "localStorage",
      "css modules"
    ]
  },
  {
    image:pokemonApi,
    title:"Pokemon List",
    route:"pokemons",
    tag:[
      "useState",
      "useEffecct",
      "localStorage",
      "css modules"
    ]
  }
]

const Home = () => {
  return (
    <div>
     <CardInitial tarjetas={tarjetas}/>
    </div>
  )
}

export default Home