import React, { Component } from 'react';
import Settings from './Settings'

class Area extends Component {
    constructor(props) {
        super(props)

        this.state = {
            game: false,
            difficultyLevel: 1,
            timeToClick: 3000,
            nextTimeMinus: 100,
            points: 0,
            minusPoints: 0,
            minTime: 100,
        }
    }

    updateDificultyLevelHandler = (value) => {
        this.setState({
            difficultyLevel: value
        }, () => {
            if (this.state.difficultyLevel === 1) {
                this.setState({
                    timeToClick: 3000,
                    nextTimeMinus: 100,
                    minusPoints: 0,
                })
            } else if (this.state.difficultyLevel === 2) {
                this.setState({
                    timeToClick: 2500,
                    nextTimeMinus: 150,
                    minusPoints: 4,
                })
            } else if (this.state.difficultyLevel === 3) {
                this.setState({
                    timeToClick: 2000,
                    nextTimeMinus: 200,
                    minusPoints: 8,
                })
            }
        })
    }

    setStartGame = () => {
        this.setState({
            game: true,
        })
    }

    render() {

        if (this.state.game === true) {
            return (
                <main className="area">
                    <h1>Game</h1>
                </main>
            )
        }

        return (
            <main className="area">
                <Settings updateDificultyLevel={this.updateDificultyLevelHandler}
                    difficultyLevel={this.state.difficultyLevel}
                    setStartGame={this.setStartGame}
                    timeToClick={this.state.timeToClick}
                    nextTimeMinus={this.state.nextTimeMinus}
                    minusPoints={this.state.minusPoints} />
            </main>
        )
    }
}

export default Area