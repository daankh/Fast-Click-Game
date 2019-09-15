import React, { Component, Fragment } from 'react';

import Avatar from './Avatar';

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

            max: 100,
            min: 0,

            avatarLeftPosition: this.getRandomNumber(0, 100),
            avatarTopPosition: this.getRandomNumber(0, 100),
        }
    }

    getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    setNewPosition() {
        this.setState({
            avatarLeftPosition: this.getRandomNumber(this.state.min, this.state.max),
            avatarTopPosition: this.getRandomNumber(this.state.min, this.state.max)
        })
    }

    render() {

        return (
            <div className="playground">
                <div className="playground__render-area">
                    <Avatar avatarLeftPosition={this.state.avatarLeftPosition}
                        avatarTopPosition={this.state.avatarTopPosition} />
                </div>
            </div>
        )
    }
}

export default Playground