import React from "react"

function App() {
    return (
        <div>

            {/*Navbar*/}
            <nav>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </nav>

            {/*Main*/}
            <main>
                <div className="card">
                    <div className="card-body">
                        This is some text within a card body.
                    </div>
                </div>
            </main>

            {/*Footer*/}
            <footer>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}


export default App
