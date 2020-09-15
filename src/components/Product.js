import React from "react"

function Product(props) {


    return(
        <div>
            <h5>Id: {props.data.id}</h5>
            <h3>Name: {props.data.name}</h3>
            <h3>Price: {props.data.price}</h3>
            <h3>Description: {props.data.description}</h3>
            <hr/>
            <br/>
        </div>
    )
}

export default Product