import React, { Component } from 'react'

class Avatar extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     type: "green"
        // }
    }

    render() {

        const position = {
            left: `${this.props.avatarLeftPosition}%`,
            top: `${this.props.avatarTopPosition}%`,
        }

        return (
            <div className={`avatar avatar--${this.props.type}`} style={position}
                onClick={this.props.updateScoreGame}>
                <div className="avatar__head">
                    <div className="avatar__eye avatar__eye--left"></div>
                    <div className="avatar__eye avatar__eye--right"></div>
                    <div className="avatar__mouth"></div>
                </div>
            </div>
        )
    }
}

export default Avatar