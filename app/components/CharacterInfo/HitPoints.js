import React, { Component } from 'react';

export default class HitPoints extends Component {

    render() {
        return (
            <div>
                <span>{this.props.hp.Current}</span>
                <span>/</span>
                <span>{this.props.hp.Max}</span>
                <span className="tempHP" style={{background: '#000',color: '#fff'}}>{this.props.hp.Temp}</span>
            </div>
        );
    }
}