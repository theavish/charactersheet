import React, { Component } from 'react';
import CharacterInfo from './CharacterInfo';
import Subsections from './Subsections';
import Scrollbar from './Scrollbar';
import character from '../character';

export default class CharacterSheet extends Component {
    render() {
        return (
            <div>
                <CharacterInfo
                    character={character} />
                <Scrollbar />
                <Subsections
                    character={character} />
            </div>
        );
    }
}