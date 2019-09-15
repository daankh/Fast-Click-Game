import React, { Component, Fragment } from 'react';

class Playground extends Component {
    constructor(props) {
        super(props)

        this.state = {
            game: this.props.game,
            difficultyLevel: this.props.difficultyLevel,
            timeToClick: this.props.timeToClick,
            currentTime: this.props.timeToClick,
            nextTimeMinus: this.props.nextTimeMinus,
            points: this.props.points,
            minusPoints: this.props.minusPoints,
            minTime: this.props.minusPoints,
        }
    }


    render() {

        return (
            <h1>Playground</h1>
        )
    }
}

export default Playground