import React, { Component } from 'react'

class UserAvatar extends Component {
    render() {

        const url = this.props.srcs[this.props.type]

        return (
            <img src={url} alt="" />
          )
    }
}

export default UserAvatar