import React, { Component, Fragment } from 'react';

class Rules extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        let minusPoints = "No minus points"

        if (this.props.minusPoints) {
            minusPoints = `You lose ${this.props.minusPoints} points when you click red object.`
        }

        return (
            <div className="rules">
                <div className="row">
                    <h3 className="rules__heading">Rules:</h3>
                </div>
                <div className="row">
                    <span>Initial time to click:</span> <span>{this.props.timeToClick / 1000}</span>s.
                </div>
                <div className="row">
                    <span>Every 10 correct clicks you have {this.props.nextTimeMinus / 1000}s less to click next time.</span>
                </div>
                <div className="row">
                    <span>The game ends when time reaches 0s.</span>
                </div>
                <div className="row">
                    <span>You get 1 point, when you click green object.</span>
                </div>
                <div className="row">
                    <span>
                        {
                            minusPoints
                        }
                    </span>
                </div>
            </div>
        )
    }
}

export default Rules