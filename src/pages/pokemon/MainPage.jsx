import Favorites from "./contentMainPage/Favorites"
import Search from "./contentMainPage/Search"


const MainPage = ({redireccionaLogin}) => {

  return (
    <div>
        <Search/>
        <Favorites redireccionaLogin={redireccionaLogin} />
    </div>
  )
}

export default MainPage