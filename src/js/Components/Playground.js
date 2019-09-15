import React, { Component, Fragment } from 'react';

import Avatar from './Avatar';

class Playground extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="playground">
                <div className="playground__render-area">
                    <Avatar avatarLeftPosition={this.props.avatarLeftPosition}
                        avatarTopPosition={this.props.avatarTopPosition}
                        type={this.props.avatarColor}
                        updateScoreGame={this.props.updateScoreGame} />
                </div>
            </div>
        )
    }
}

export default Playground