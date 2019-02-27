import React, { Component } from 'react';
import Screen from '../screen';
import Keyboard from '../keyboard';
import './style.css';

class Wrapper extends Component {
    render() {
        const header = "React Calulator";
        return (
            <section className="ng-calculator__wrapper">
                <header>{header}</header>
                <Screen />
                <Keyboard />
            </section>
        );
    }
}

export default Wrapper;