import React, { Component } from 'react';
import Key from '../key';
import './style.css';

const data = {
    nums: ['CE', 'C', '←', '1', '2', '3', '4', '5', '6', '7', '8', '9', '±', '0', '.'],
    opChars: ['x²', 'x^y', 'sin', 'cos', 'tan', 'x³', 'y√x', 'sin﹣¹', 'cos﹣¹', 'tan﹣¹', '√', '10^x', 'log', 'Exp', 'Mod', '1/x', 'e^x', 'ln', 'dms', 'deg', '↑', 'π', 'n!', '(', ')'],
    basicChars: ['÷', '×', '-', '+', '=']
}

class Keyboard extends Component {
    render() {
        return (
            <section className="ng-calculator__keyboard">
                <div className="ng-calculator__oppad">	
                    {data.opChars.map((item, index) => {
                        return <Key key={index} content={item} />;
                    })}
                </div>
                <div className="ng-calculator__numpad">
                    {data.nums.map((item, index) => {
                        return <Key key={index} content={item} />;
                    })}
                </div>
                <div className="ng-calculator__basicpad">
                    {data.basicChars.map((item, index) => {
                        return <Key key={index} content={item} />;
                    })}
                </div>
            </section>
        );
    }
}

export default Keyboard;