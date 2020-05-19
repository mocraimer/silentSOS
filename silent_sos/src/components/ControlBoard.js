import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import ReactScrollableList from 'react-scrollable-list';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import GoogleMapReact from 'google-map-react';
import Chat from './ChatBubble'
import Grid from '@material-ui/core/Grid';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class ControlBoard extends React.Component {
    handleFormat = (event, newFormats) => {
        console.log('change');
      };
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

      state = {
        messages: [{
            "text": "Hello! Good Morning!"
        }, {
            "text": "Hello! Good Afternoon!"
        }],
        alerts : [{
            id:1234,
            status:'waiting',
            date:'today'
            },
            {
                id:1234,
                status:'waiting',
                date:'today'
            },
            {
                id:1234,
                status:'waiting',
                date:'today'
            }
        ]
      }

    render() {
        return (
            <div style={{flexGrow: 1}}>
                <Grid container direction="row" spacing={1}>
                    <Grid container xs={12}>
                        <img src='logo.png' style={{width:'100px', height:'58px'}}/>
                    </Grid>
                    <Grid item container spacing={1}  >
                        <Grid item xs={3} className='statusButtons' >
                                <ToggleButtonGroup value={['bold','italic']} onChange={this.handleFormat} aria-label="text formatting">
                                    <ToggleButton value="bold" aria-label="bold">
                                        <h2> OMG</h2>
                                    </ToggleButton>
                                    <ToggleButton value="italic" aria-label="italic">
                                        <h2> OMG</h2>
                                    </ToggleButton>
                                    <ToggleButton value="underlined" aria-label="underlined">
                                        <h2> OMG</h2>
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                            <Grid item xs={3}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: 'AIzaSyA9__cyfleFnsGkaMiPzPCTAVlP2f5iyb4' }}
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                    >
                                        <AnyReactComponent
                                            lat={59.955413}
                                            lng={30.337844}
                                            text="My Marker"
                                        />
                                    </GoogleMapReact>
                            </Grid>
                            <Grid item xs={3} className='chatContainer'>
                                <Chat messages = {this.state.messages} />
                            </Grid>
                            <Grid item container xs={3} style={{height: '92vh'}}>
                                <List style={{height:'100%'}} component="nav" aria-label="secondary mailbox folders">
                                    {this.state.alerts.map((alrt,key) => {
                                        return <ListItem className="alertListContainer">
                                        <ListItemText primary={alrt.id} />
                                        <ListItemText primary={alrt.status} />
                                        <ListItemText primary={alrt.date} />
                                        </ListItem>
                                    })}
                                </List>
                            </Grid>
                    </Grid>
                </Grid>
                </div>
        );
    }
}