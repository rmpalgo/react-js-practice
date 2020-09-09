import React from "react"

function TodoItem() {

    return(
        <div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Item 1</label>
            </div>
        </div>
    )
}


export default TodoItem