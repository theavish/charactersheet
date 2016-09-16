import React, { Component } from 'react';

export default class Scrollbar extends Component {
    render() {
        return (
            <div>
                <button>Abilities</button>
                <button>Skills</button>
                <button>Attacks</button>
                <button>Spells</button>
                <button>Limited Use</button>
                <button>Equipment</button>
                <button>Features</button>
                <button>Description</button>
            </div>
        );
    }
}