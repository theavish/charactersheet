import React, { Component } from 'react';
import CharacterInfo from './CharacterInfo';
import Subsections from './Subsections';
import Scrollbar from './Scrollbar';

export default class CharacterSheet extends Component {
    render() {
        return (
            <div>
                <CharacterInfo />
                <Scrollbar />
                <Subsections />
            </div>
        );
    }
}