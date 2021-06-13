import React, { Component } from 'react'
import UserCard from './UserCard'

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Email</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Userpic</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

class UsersList extends Component {
    render() {
        const users = this.props.users.map((row, index) => {
            return (
                <UserCard user={row} key={index} id={index} removeCharacter={this.props.removeCharacter} />
            )
        })

        return (
            <div>
                <table>
                    <TableHead />
                    <tbody>
                        {users}
                    </tbody>
                </table>
                <p>Отображаем { this.props.users.length } элементов</p>
            </div>
        )
    }
}

export default UsersList