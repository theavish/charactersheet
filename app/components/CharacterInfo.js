import React, { Component } from 'react';
import CharacterData from './CharacterInfo/CharacterData';
import HitPoints from './CharacterInfo/HitPoints';
import QuickInfo from './CharacterInfo/QuickInfo';
import Actions from './CharacterInfo/Actions';


export default class CharacterInfo extends Component {
    render() {
        return (
            <div>
                <CharacterData 
                    name={this.props.character.Name}
                    avatar={this.props.character.AvatarSrc}
                    classes={this.props.character.Classes}
                    gender={this.props.character.Gender}
                    level={this.props.character.Level}
                    exp={this.props.character.Experience}
                    race={this.props.character.Race} />
                <HitPoints 
                    hp={this.props.character.HitPoints} />
                <QuickInfo
                    ac={this.props.character.Defense.ArmorClass}
                    initiative={this.props.character.Initiative}
                    speed={this.props.character.Speed}
                    passivePerception={this.props.character.Senses.PassivePerception}
                    profBonus={this.props.character.ProficiencyBonus} />
                <Actions 
                    inspiration={this.props.character.Inspiration}
                    deathSaves={this.props.character.DeathSaves}
                    hitDice={this.props.character.HitPoints.HitDice} />
            </div>
        );
    }
}