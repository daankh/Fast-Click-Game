import React, { Component } from 'react'

class Summary extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        return (
            <form className="summary">
                <div className="row">
                    <h3 className="summary__heading">Your score is:</h3>
                </div>
                <div className="row">
                    <h2 className="summary__score">{this.props.points}</h2>
                </div>
                <div className="row">
                    <h3 className="summary__praise">Nice try! Click button below to start new game</h3>
                </div>
                <div className="row">
                    <input type="submit"
                        className="btn btn--new-game"
                        value="Start new game"
                        onClick={this.props.resetGameParameters} />
                </div>

            </form>
        )
    }
}

export default Summary