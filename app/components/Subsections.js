import React, { Component } from 'react';
import AbilityScores from './Subsections/AbilityScores';
import Skills from './Subsections/Skills';

export default class Subsections extends Component {
    render() {
        return (
            <div>
                <AbilityScores />
                <Skills />
            </div>
        );
    }
}