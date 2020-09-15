import React from "react"

function Joke(props) {
//     let jokeCard =
//         <div>
//         <p>Question: {props.joke.question}</p>
//         <p>Punchline: {props.joke.punchline}</p>
//         </div>
// console.log(props.joke.question)
//     if(props.joke.question === undefined) {
//         jokeCard =
//             <div>
//                 <p>Punchline: {props.joke.punchline}</p>
//             </div>
//     }

    return (
        <div>
            <h3 style={{display: props.joke.question ? "block" : "none"}}>Question: {props.joke.question}</h3>
            <h3 style={{color: props.joke.question ? "#000" : "#888"}}>Question: {props.joke.punchline}</h3>
        </div>
    )
}

export default Joke