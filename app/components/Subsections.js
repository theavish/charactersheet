import React, { Component } from 'react';
import AbilityScores from './Subsections/AbilityScores';
import Skills from './Subsections/Skills';

export default class Subsections extends Component {
    render() {
        return (
            <div>
                <AbilityScores
                    str={this.props.character.AbilityScores.STR}
                    dex={this.props.character.AbilityScores.DEX}
                    con={this.props.character.AbilityScores.CON}
                    int={this.props.character.AbilityScores.INT}
                    wis={this.props.character.AbilityScores.WIS}
                    cha={this.props.character.AbilityScores.CHA} />
                <Skills
                    skills={this.props.character.Skills} />
            </div>
        );
    }
}