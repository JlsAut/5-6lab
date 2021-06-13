import React, { Component } from 'react'
import Loader from "react-loader-spinner";

class Preloader extends Component {
    render() {

        return (
            <Loader
                type="Grid"
                color="#00BFFF"
                height={400}
                width={400}
                timeout={0}
            />
        )
    }
}

export default Preloader