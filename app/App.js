import React from 'react';
import { render } from 'react-dom';
import CharacterSheet from './components/CharacterSheet';
import character from './character';

render(
    <CharacterSheet character={character} />,
    document.getElementById('app')
);
