import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
import './App.css';


class App extends Component {
    state = {
        username: 'SuperMilo555'
    }

    usernameChangedHandler = (event) => {
        this.setState({username: event.target.value})
    }

    render() {
        return (
            <div className={"App"}>
                <UserInput
                    changed={this.usernameChangedHandler}
                    currentName={this.state.username}/>
                <UserOutput username={"Milo221"}/>
                <UserOutput username={this.state.username} override={"Override"}/>
            </div>
        );

    }
}

export default App;
