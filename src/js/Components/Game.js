import React, { Component, Fragment } from 'react';

import Heading from './Heading'
import Playground from './Playground'

class Game extends Component {
    constructor(props) {
        super(props)

        this.baseIndex = null
        this.index = null

        this.state = {
            currentBaseTime: this.props.timeToClick,
            currentTime: this.props.timeToClick,
        }
    }

    componentDidMount() {
        this.setNewInterval()
    }

    componentWillUnmount() {
        this.clearCurrentInterval()
    }

    setNewInterval = () => {

        this.setState({
            currentTime: this.state.currentBaseTime
        }, () => {
            this.index = setInterval(() => {
                this.setState({
                    currentTime: this.state.currentTime - 10
                }, () => {
                    if (this.state.currentTime <= 0) {
                        this.clearCurrentInterval()
                        this.props.setEndGame()
                    }
                })
            }, 10)
        })
    }

    clearCurrentInterval = () => {
        clearInterval(this.index)
    }


    render() {

        return (
            <div className="game">
                <Heading currentTime={this.state.currentTime} score={this.props.points} />
                <Playground
                    difficultyLevel={this.props.difficultyLevel}
                    timeToClick={this.props.timeToClick}
                    nextTimeMinus={this.props.nextTimeMinus}
                    points={this.props.points}
                    minusPoints={this.props.minusPoints}
                    minTime={this.props.minTime}
                    currentTime={this.state.currentTime}
                    setEndGame={this.props.setEndGame}
                    updateScore={this.props.updateScore}
                    setNewInterval={this.setNewInterval}
                    clearCurrentInterval={this.clearCurrentInterval}
                />
            </div>
        )
    }
}

export default Game