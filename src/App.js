import React from "react"
import Info from "./components/Info"
import infoData from "./infoData"

function App() {
    const infoComponents = infoData.map( info => {
        return (
            <Info key={info.id} data={{
                id: info.id,
                name: info.name,
                email: info.email,
                languages: info.languages,
                yearsOfExperience: info.yearsOfExperience
            }} />
        )
    })

    return (
        <div>
            {infoComponents}
        </div>
    )
}


export default App