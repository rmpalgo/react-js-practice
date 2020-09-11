import React from "react"
import TodoItem from "./components/TodoItem"
import "./style.css"

function App() {
    return (
        <div className="card" style={{width: "18rem", margin: "8rem auto", padding: "2em"}}>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App