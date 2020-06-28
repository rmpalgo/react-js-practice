import React, { Component } from 'react';
import './Person.module.css';

class Person extends Component{

    render() {
        console.log('3b. [Person.js] is rendering...')
        return (
            <div >
                <p onClick={this.props.click}>I'm {this.props.name} and my breed is {this.props.breed}!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;