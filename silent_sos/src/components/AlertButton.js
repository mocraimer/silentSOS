import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
export default class AlertButton extends React.Component {
    handleAlert = () => { 
        let timestamp = Date.now();
        console.log('clicked');
        if(reactLocalStorage.get('alerts',false,true)){
            let currentAlerts = reactLocalStorage.get('alerts',undefined,false);
                currentAlerts = JSON.parse(currentAlerts);
                currentAlerts.push(timestamp);
                reactLocalStorage.setObject('alerts', currentAlerts);
        }
        else {
            reactLocalStorage.set('alerts',JSON.stringify([timestamp]))
        }
    };
    render() {
        return (
            <div>
                <a onClick={this.handleAlert}>
                    <img class="img-responsive emsbutton" src="https://image.ibb.co/dqibLk/button.png" />
                    <span>Test</span>
                </a>
            </div>
        );
    }
}