import { BASE_URL } from "./config";


const deletePokemon = (username, id) => {
    const options={
        method:"DELETE",
        header:{
            "User-Agent": "insomnia/8.3.0"
        },

    }

    const url = `${BASE_URL}/${username}/favorites/${id}`
    const data = fetch(url, options)
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

export { deletePokemon} 