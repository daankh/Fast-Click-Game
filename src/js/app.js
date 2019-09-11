import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './../sass/style.scss'; // adres do głównego pliku SASS

// import img from '../images/image.jpg';

class App extends Component {
    render() {
        return <h2>To tylko test!</h2>
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
})

