import React from "react"

function PokemonCard(props) {

    return(
        <div>
            <img src={props.imgUrl} alt=""/>
            <h3>{props.name}</h3>
            <p>Type: {props.type}</p>
            <p>Abilities: {props.ability}</p>
        </div>
    )
}


export default PokemonCard