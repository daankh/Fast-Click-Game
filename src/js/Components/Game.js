import React, { Component, Fragment } from 'react';

import Heading from './Heading'
import Playground from './Playground'

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentTime: this.props.timeToClick
        }
    }


    render() {

        return (
            <div className="game">
                <Heading currentTime={this.state.currentTime} score={this.props.points} />
                <Playground />
            </div>
        )
    }
}

export default Game