import CardInitial from "../../components/card/CardInitial";
import tictacImage from ".././../assets/img/tic-tac-toe.png";
import pokemonApi from "../../assets/img/poke-api.png";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const tarjetas = [
  {
    image: tictacImage,
    title: "tictac",
    route: "tictactoe",
    tags: ["useState", "useEffecct", "localStorage", "css modules"],
  },
  {
    image: pokemonApi,
    title: "Pokemon List",
    route: "pokemons",
    tags: ["useState", "useEffecct", "localStorage", "css modules"],
  },
];

const Home = () => {
  return (
    <div  className="h-screen bg-blue-500">
    <Header  />
    <div  className="h-3/4 bg-slate-400 flex justify-center items-center">
      <CardInitial tarjetas={tarjetas} />
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
