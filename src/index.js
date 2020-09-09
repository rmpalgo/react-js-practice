import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay = ""
    const styles = {
        backgroundColor: "gray",
        fontSize: "90px"
    }

    if(hours < 12) {
        timeOfDay = "morning"
        styles.color = "#e3d86d"
    } else if(hours > 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#84b120"
    } else {
        timeOfDay = "evening"
        styles.color = "#3e0606"
    }



    return (<h1 style={styles}>Good, {`${timeOfDay}!`}</h1>)
}


ReactDOM.render(<App />, document.getElementById("root"))