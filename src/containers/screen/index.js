import React, { Component } from 'react';
import './style.css';

class Screen extends Component {
    render() {
        return (
            <section className="ng-calculator__screen">
                <input className="form-control" type="text" name="screen" id="screen" placeholder="此处键入公式"/>
            </section>
        );
    }
}

export default Screen;