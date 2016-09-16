import React, { Component } from 'react';

export default class QuickInfo extends Component {
    render() {
        return (
            <div>
                <div className="armor-class">
                    <h3>Armor Class</h3>
                    <span>{this.props.ac.Total}</span>
                </div>
                <div className="initiative">
                    <h3>Initiative</h3>
                    <span>{this.props.initiative >= 0 ? `+${this.props.initiative}` : this.props.initiative}</span>
                </div>
                <div className="speed">
                    <h3>Speed</h3>
                    <span>{this.props.speed.Walk}ft</span>
                </div>
                <div className="passive-perception">
                    <h3>Passive Perception</h3>
                    <span>{this.props.passivePerception}</span>
                </div>
                <div className="proficiency-bonus">
                    <h3>Proficiency Bonus</h3>
                    <span>{this.props.profBonus >= 0 ? `+${this.props.profBonus}` : this.props.profBonus}</span>
                </div>
            </div>
        );
    }
}