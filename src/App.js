import React from "react"
import PokemonCard from "./components/PokemonCard"

function App() {
    return(
        <div>
            <PokemonCard
                pokemon={
                    {
                         name: "Pikachu",
                         imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
                         type: "Electric",
                         ability: "Electric Bolt"}
                    }/>
            <PokemonCard
                pokemon={
                    {
                        name: "Venosaur",
                         imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
                         type: "Grass",
                         ability: "Chlorophyll"
                    }
                }/>
            <PokemonCard
                pokemon={
                    {
                        name: "Charmander",
                        imgUrl:  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                        type: "Fire",
                        ability: "Solar Power"
                    }
                    }/>
            <PokemonCard
                pokemon={
                    {
                        name: "Charmeleon",
                        imgUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
                        type:"Fire",
                        ability:"Solar Power"
                    }
                }/>
        </div>
    )
}


export default App