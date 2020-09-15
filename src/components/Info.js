import React from "react"

function Info(props) {
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
    const langs = props.data.languages.map( lang => <li>{lang}</li> )

    return (
        <div>
            <h3 >ID: {props.data.id}</h3>
            <h3 >Name: {props.data.name}</h3>
            <h3 >Email: {props.data.email}</h3>
            <h3 >Languages: </h3>
            <ul >
                {langs}
            </ul>
            <h3>Years of Experience: {props.data.yearsOfExperience}</h3>
            <hr/>
            <br/>
        </div>
    )
}

export default Info