import React from "react"

function Joke(props) {
    let jokeCard =
        <div>
        <p>Question: {props.joke.question}</p>
        <p>Punchline: {props.joke.punchline}</p>
        </div>
console.log(props.joke.question)
    if(props.joke.question === undefined) {
        jokeCard =
            <div>
                <p>Punchline: {props.joke.punchline}</p>
            </div>
    }

    return (
        jokeCard
    )
}

export default Joke