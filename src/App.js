import React, { Component } from 'react';
import './App.css';

// function App(props) {
//   return (
//     <div className="App">
//       <div>
//           <p>Name: {props.name}</p>
//           <p>Breed: {props.breed}</p>
//       </div>
//     </div>
//   );
// }

class App extends Component {
    render() {
        // return (
        //     <div className="App">
        //         <div>
        //             <h1>React app ES6</h1>
        //         </div>
        //     </div>
        // );
        return React.createElement('div', null, React.createElement('h1', null, 'Is this Rendering on the page?'));
    }
}

export default App;
