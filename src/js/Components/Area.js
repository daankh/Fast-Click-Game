import React, { Component } from 'react';
import Settings from './Settings'

class Area extends Component {
    constructor(props) {
        super(props)

        this.state = {
            game: false,
            difficultyLevel: 1,
        }
    }

    updateDificultyLevelHandler = (value) => {
        this.setState({
            difficultyLevel: value
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
                    setStartGame={this.setStartGame} />
            </main>
        )
    }
}

export default Area