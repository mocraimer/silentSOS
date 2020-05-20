import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import Game from "../MemoryGame/Game/Game";
import "../scss/main.scss";
export default class AlertButton extends React.Component {

    handleAlert = () => {
        let timestamp = Date.now();
        console.log('clicked');
        if (reactLocalStorage.get('alerts', false, true)) {
            let currentAlerts = reactLocalStorage.get('alerts', undefined, false);
            currentAlerts = JSON.parse(currentAlerts);
            currentAlerts.push(timestamp);
            reactLocalStorage.setObject('alerts', currentAlerts);
        }
        else {
            reactLocalStorage.set('alerts', JSON.stringify([timestamp]))
        }
    };

    getHelp = () => {
        console.log('Help requested');
        this.state.showAlert = true;
        this.forceUpdate()
    }

    startNewGame = () => {
        console.log('Starting new game...');
        window.location.reload();
    }

    about = () => {
        window.open('https://github.com/mocraimer/silentSOS')
    }

    state = {
        showAlert: false,
        game: (
            // Game taken from https://github.com/svsem/Memorai
            <div>
                <Game />
                <button class="helpButton" onClick={this.about}>אודות</button>
                <button class="helpButton" onClick={this.getHelp}>עזרה</button>
                <button class="helpButton" onClick={this.startNewGame}>משחק חדש</button>
            </div>),
        alertButton: (
            <div class="alertButton">
                <a onClick={this.handleAlert} href="/sos">
                    <img class="img-responsive emsbutton" src="static/images/sos_button.png" />
                </a>
            </div>)
    }

    render() {
        return (
            <div>
                {this.state.showAlert ?
                    this.state.alertButton :
                    this.state.game}
            </div>
        );
    }
}