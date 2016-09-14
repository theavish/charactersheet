import React, { Component } from 'react';
import CharacterData from './CharacterInfo/CharacterData'
import HitPoints from './CharacterInfo/HitPoints'
import QuickInfo from './CharacterInfo/QuickInfo'
import Actions from './CharacterInfo/Actions'


export default class CharacterInfo extends Component {
    render() {
        return (
            <div>
                <CharacterData />
                <HitPoints />
                <QuickInfo />
                <Actions />
            </div>
        );
    }
}