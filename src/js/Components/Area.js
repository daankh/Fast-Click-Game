import React, { Component } from 'react';
import Settings from './Settings'
import Game from './Game'
import Summary from './Summary'

class Area extends Component {
    constructor(props) {
        super(props)

        this.state = {
            game: "start",
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
            game: "game",
        })
    }

    setEndGame = () => {
        this.setState({
            game: "finished",
        })
    }

    setNewGame = () => {
        this.setState({
            game: "start"
        })
    }

    render() {

        if (this.state.game === "game") {
            return (
                <main className="area">
                    <Game difficultyLevel={this.state.difficultyLevel}
                        timeToClick={this.state.timeToClick}
                        nextTimeMinus={this.state.nextTimeMinus}
                        points={this.state.points}
                        minusPoints={this.state.minusPoints}
                        minTime={this.state.minTime}
                        setEndGame={this.setEndGame}
                    />
                </main>
            )
        } else if (this.state.game === "finished") {
            return (
                <main className="area">
                    <Summary />
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