import React, { Component, Fragment } from 'react';

import Heading from './Heading'
import Playground from './Playground'

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentBaseTime: this.props.timeToClick,
            currentTime: this.props.timeToClick,
        }
    }

    componentDidMount() {
        const index = setInterval(() => {
            this.setState({
                currentTime: this.state.currentTime - 10
            }, () => {
                if (this.state.currentTime <= 0) {
                    clearInterval(index)
                    this.props.setEndGame()
                }
            })
        }, 10)
    }

    componentWillUnmount() {
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
                />
            </div>
        )
    }
}

export default Game