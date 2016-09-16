import React, { Component } from 'react';

export default class CharacterData extends Component {
    
    buildClassList(classes) {
        const list = classes.map((cl, idx) => {
            const curClass = Object.keys(cl)[0];
            const levels = cl[curClass];
            return curClass + ' ' + levels;
        });
        return list.join(' \/ ');
    }

    render() {
        return (
            <div>
                <span>{this.props.name}</span>
                <img className="character-avatar" height="50px" src={this.props.avatar} />
                <div>
                    <span>{this.props.gender} </span>
                    <span>{this.props.race} </span>
                    <span>{this.buildClassList(this.props.classes)}</span>
                </div>
            </div>
        );
    }
}