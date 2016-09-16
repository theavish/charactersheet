import React, { Component } from 'react';

export default class AbilityScores extends Component {

    scoresChart(score) {
        return (
            <tr className={`${(score.Label).toLowerCase()}-score`}>
                <th>{score.Label}</th>
                <td>{score.Score}</td>
                <td>MOD {score.Modifier >= 0 ? `+${score.Modifier}` : score.Modifier}</td>
                <td>SAVE {score.Save >= 0 ? `+${score.Save}` : score.Save}</td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.scoresChart(this.props.str)}
                        {this.scoresChart(this.props.dex)}
                        {this.scoresChart(this.props.con)}
                        {this.scoresChart(this.props.int)}
                        {this.scoresChart(this.props.wis)}
                        {this.scoresChart(this.props.cha)}
                    </tbody>
                </table>
            </div>
        );
    }
}