import React, { Component } from 'react'
import UsersList from './UsersList'
import Preloader from './Preloader'
import Button from './Button'

class App extends Component {

    state = {
        json: {
            results:
                []
        },
        loading:
            false,
    }

    handleClickMore = () => {
        this.forceUpdate()
        fetch(this.props.url)
            .then((result) => {
                if (result.ok)
                    result.json()
                        .then((result) => {
                            this.setState({
                                json: {
                                    results:
                                        [...this.state.json.results, ...result.results]
                                },
                                loading:
                                    false,
                            });
                            console.log(result)
                        })
            })
    }

    handleClick = () => {
        this.setState({
            loading:
                true,
        });
        this.forceUpdate()
        fetch(this.props.url)
            .then((result) => {
                if (result.ok)
                    result.json()
                        .then((result) => {
                            this.setState({
                                json:
                                    result,
                                loading:
                                    false,
                            });
                            console.log(result)
                        })
            })
    }

    componentDidMount = this.handleClick

    removeCharacter = (index) => {
        console.log(index)
        const { results } = this.state.json

        this.setState({
            json: {
                results: results.filter((_, i) => {
                    return i !== index
                }),
            }
        })
    }

    render() {
        const { json } = this.state
        const { results } = json

        if (!this.state.loading)
            if (results.length === 0)
                return (
                    <div className="container">
                        <Button onClick={this.handleClick} label="Обновить" />
                    </div>
                )
            else
                return (
                    <div className="container">
                        <Button onClick={this.handleClick} label="Обновить" />
                        <UsersList users={results} removeCharacter={this.removeCharacter} />
                        <Button onClick={this.handleClickMore} label="Загрузить больше..." />
                    </div>
                )
        else
            return (
                <div className="container">
                    <Button onClick={this.handleClick} label="Обновить" />
                    <Preloader />
                </div >
            )
    }
}

export default App
