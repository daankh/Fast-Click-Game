import React, { Component, Fragment } from 'react';

class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            difficultyLevel: this.props.difficultyLevel
        }
    }

    setDifficultyLevel = (e) => {
        const value = Number(e.target.value)

        this.props.updateDificultyLevel(value)

        this.setState({
            difficultyLevel: value
        })
    }

    startGame = (e) => {
        e.preventDefault()
        this.props.setStartGame()
    }

    render() {

        let radios = null

        radios = (
            <Fragment>
                <label className="selectDificultyLevel">
                    <input type="radio"
                        onChange={e => this.setDifficultyLevel(e)}
                        name="difficultyLevel"
                        value="1"
                        className="selectDificultyLevel__radio"
                        checked={Number(this.state.difficultyLevel) === 1} />
                    <span className="selectDificultyLevel__text">1</span>
                </label>
                <label className="selectDificultyLevel">
                    <input type="radio"
                        onChange={e => this.setDifficultyLevel(e)}
                        name="difficultyLevel" value="2"
                        className="selectDificultyLevel__radio"
                        checked={Number(this.state.difficultyLevel) === 2} />
                    <span className="selectDificultyLevel__text">2</span>
                </label>
                <label className="selectDificultyLevel">
                    <input type="radio"
                        onChange={e => this.setDifficultyLevel(e)}
                        name="difficultyLevel"
                        value="3"
                        className="selectDificultyLevel__radio"
                        checked={Number(this.state.difficultyLevel) === 3} />
                    <span className="selectDificultyLevel__text">3</span>
                </label>
            </Fragment>
        )

        return (
            <form className="settings">
                <h2 className="settings__heading">Select difficulty level</h2>
                <div className="settings__chooseDifficultyLevel">
                    {radios}
                </div>
                <input type="submit"
                    className="btn btn--new-game"
                    value="New Game"
                    onClick={this.startGame} />
            </form>
        )
    }
}

export default Settings