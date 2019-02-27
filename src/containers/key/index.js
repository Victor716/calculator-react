import React, { Component } from 'react';
import './style.css';

class Key extends Component {

    render() {
        return (
            <div className="ng-calculator__key">
                {this.props.content}
            </div>
        );
    }
}

export default Key;