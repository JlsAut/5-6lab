import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

//const url = 'https://httpstat.us/404'
const url = 'https://randomuser.me/api/?results=25'

ReactDOM.render(<App url={url} />, document.getElementById('root'))