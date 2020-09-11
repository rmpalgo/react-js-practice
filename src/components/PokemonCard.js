import React from "react"

function PokemonCard(props) {

    return(
        <div>
            <img src={props.pokemon.imgUrl} alt=""/>
            <h3>{props.pokemon.name}</h3>
            <p>Type: {props.pokemon.type}</p>
            <p>Abilities: {props.pokemon.ability}</p>
        </div>
    )
}


export default PokemonCard