import React, { Component } from 'react';

export default class CharacterData extends Component {
    render() {
        return (
            <div>
                <img src={this.props.user.avatarSrc} />
            </div>
        );
    }
}