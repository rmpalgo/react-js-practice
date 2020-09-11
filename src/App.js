import React from "react"
import Joke from "./components/Joke"

function App() {

    return (
        <div>
            <Joke
                joke={{
                    question: "Joke 1",
                    punchline: "Punchline 1"
                }}
            />
            <Joke
                joke={{
                    question: "Joke 2",
                    punchline: "Punchline 2"
                }}/>
            <Joke
                joke={{
                    question: "Joke 3",
                    punchline: "Punchline 3"
                }}/>
            <Joke
                joke={{
                    question: "Joke 4",
                    punchline: "Punchline 4"
                }}/>
            <Joke
                joke={{
                    punchline: "Punchline 5"
                }}/>
        </div>
    )
}


export default App