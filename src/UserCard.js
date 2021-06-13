import React, { Component } from 'react'
import UserAvatar from './UserAvatar'
import Button from './Button'

class UserCard extends Component {
    render() {
        const { user, removeCharacter, id } = this.props

        return (
            <tr>
                <td>{user.name.title} {user.name.first} {user.name.last}</td>
                <td>{user.gender}</td>
                <td>{user.location.country}, {user.location.state} state, {user.location.city} city, {user.location.street.name} street</td>
                <td>{user.email}</td>
                <td>{user.dob.age}</td>
                <td>phone: {user.phone}<br /> cell: {user.cell}</td>
                <td><UserAvatar srcs={user.picture} type="medium" /></td>
                <td><Button onClick={() => removeCharacter(id)} label="Стереть" /></td>
            </tr>
        )
    }
}

export default UserCard