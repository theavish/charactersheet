import React, { Component } from 'react';

export default class Actions extends Component {
    render() {
        return (
            <div>
                <button className="button">Inspiration</button>
                <button className="button">Death Saves</button>
                <button className="button">Rest</button>
                <button className="button">Hit Dice</button>
            </div>
        );
    }
}