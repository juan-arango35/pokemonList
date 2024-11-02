import Favorites from "./contentMainPage/Favorites"
import Search from "./contentMainPage/Search"


const MainPage = ({redireccionaLogin}) => {

  return (
    <div className="grid grid-cols-6 grid-rows-5 gap-4">
        <Search/>
        <Favorites redireccionaLogin={redireccionaLogin} />
    </div>
  )
}

export default MainPage