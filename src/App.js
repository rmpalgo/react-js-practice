import React from "react"
import PokemonCard from "./components/PokemonCard"

function App() {
    return(
        <div>
            <PokemonCard name="Pikachu"
                         imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                         type="Electric"
                         ability="Electric Bolt"/>
            <PokemonCard name="Venosaur"
                         imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                         type="Grass"
                         ability="Chlorophyll"/>
            <PokemonCard name="Charmander"
                         imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                         type="Fire"
                         ability="Solar Power"/>
            <PokemonCard name="Charmeleon"
                         imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
                         type="Fire"
                         ability="Solar Power"/>
        </div>
    )
}


export default App