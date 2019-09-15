import React, { Component, Fragment } from 'react';

import Heading from './Heading'
import Playground from './Playground'

class Game extends Component {
    constructor(props) {
        super(props)

        this.baseIndex = null
        this.index = null

        this.state = {
            game: this.props.game,
            difficultyLevel: this.props.difficultyLevel,
            clicks: 0,
            minusTime: 0,
            currentBaseTime: this.props.timeToClick,
            currentTime: this.props.timeToClick,
            avatarColor: 'green',
            avatarLeftPosition: 50,
            avatarTopPosition: 50,
            max: 100,
            min: 0,
            timeToClick: this.props.timeToClick,
            currentTime: this.props.timeToClick,
            nextTimeMinus: this.props.nextTimeMinus,
            points: this.props.points,
            minusPoints: this.props.minusPoints,
            minTime: this.props.minusPoints,
        }
    }

    getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    componentDidMount() {
        this.setNewInterval()
    }

    componentWillUnmount() {
        this.clearCurrentInterval()
    }

    setNewInterval = () => {
        let minusTime = this.state.minusTime
        if (!(this.state.clicks % 10)) {
            minusTime = this.state.clicks / 10 * this.props.nextTimeMinus
        }

        if (minusTime < this.props.minTime) {
            minusTime = this.props.minTime
        }

        this.setState({
            minusTime: minusTime,
        }, () => {
            this.setState({
                currentTime: this.state.currentBaseTime - this.state.minusTime
            }, () => {
                this.index = setInterval(() => {
                    this.setState({
                        currentTime: this.state.currentTime - 10
                    }, () => {
                        if (this.state.currentTime <= 0) {

                            if (this.state.avatarColor === 'green') {
                                this.clearCurrentInterval()
                                this.props.setEndGame()
                            } else if (this.state.avatarColor === 'red') {
                                this.clearCurrentInterval()
                                this.setNewInterval()

                                const score = 2
                                this.props.updateScore(score)
                                this.updateClicks()

                                this.generateAvatar()
                            }
                        }
                    })
                }, 10)
            })
        })


    }

    clearCurrentInterval = () => {
        clearInterval(this.index)
    }

    updateClicks = () => {
        this.setState({
            clicks: this.state.clicks + 1,
        })
    }


    updateScoreGame = () => {
        this.clearCurrentInterval()
        this.setNewInterval()

        let score = 1

        if (this.props.difficultyLevel === 2 && this.state.avatarColor === 'red') {
            score = -4
        }

        if (this.props.difficultyLevel === 3 && this.state.avatarColor === 'red') {
            score = -8
        }

        this.props.updateScore(score)
        this.updateClicks()

        this.generateAvatar()
    }


    generateAvatar = () => {
        let avatars = ['green']

        if (this.props.difficultyLevel === 2) {
            avatars = ['green', 'green', 'green', 'red']
        } else if (this.props.difficultyLevel === 3) {
            avatars = ['green', 'green', 'red', 'green', 'red']
        }

        const number = this.getRandomNumber(0, avatars.length - 1);

        this.setState({
            avatarColor: avatars[number],
            avatarLeftPosition: this.getRandomNumber(this.state.min, this.state.max - 10),
            avatarTopPosition: this.getRandomNumber(this.state.min, this.state.max - 15)
        })
    }

    render() {

        return (
            <div className="game">
                <Heading currentTime={this.state.currentTime} score={this.props.points} />
                <Playground
                    avatarColor={this.state.avatarColor}
                    avatarLeftPosition={this.state.avatarLeftPosition}
                    avatarTopPosition={this.state.avatarTopPosition}
                    updateScoreGame={this.updateScoreGame}
                />
            </div>
        )
    }
}

export default Game