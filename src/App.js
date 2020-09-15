import React from "react"
import Product from "./components/Product"
import dataProducts from "./dataProducts"

function App() {
const result = dataProducts.map( product => {
    return <Product key={product.id} data={{
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description
    }}/>
})


    return (
        <div>
            {result}
        </div>
    )
}

export default App