import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent";

function App() {
    return (
        <div>
            {/*Navbar*/}
            <Header />

            {/*Main*/}
           <MainContent />

            {/*Footer component*/}
            <Footer />
        </div>
    )
}

export default App
