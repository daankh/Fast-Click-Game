import React, { Component, Fragment } from 'react';

class Heading extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {

        return (
            <div className="game__heading">
                <div className="game__score">
                    <span>Score:</span> <span>{this.props.score}</span>
                </div>
                <div className="game__time">
                    <span>Time:</span> <span>{(this.props.currentTime / 1000).toFixed(2)}s</span>
                </div>
            </div>
        )
    }
}

export default Heading