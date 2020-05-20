import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
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
        this.setState({selectedButtons:['underlined','italic']})
        console.log('change');
      };

      state = {
        selectedButtons:['underlined'],
        messages: [{
            "text": "זקוקה לטיפול רפואי"
        }, {
            "text": "יש ילדים במקום"
        }, {
            "text": "בבקשה תזעיקו עזרה! בעלי מרביץ לי"
        }],
        alerts : [{
            id:1,
            status:'התקבלה',
            date:'20.05.20 - 10:00'
            },
            {
                id:2,
                status:'התקבלה',
                date:'20.05.20 - 11:00'
            },
            {
                id:3,
                status:'נשלחה עזרה',
                date:'20.05.20 - 11:15'
            }
        ]
      }

    render() {
        return (
            <div style={{flexGrow: 1}}>
                <Grid container direction="row" spacing={1}>
                    <Grid container xs={12} style={{backgroundColor:'black'}}>
                        <img src='logo.png' style={{width:'250', height:'60px'}}/>
                    </Grid>
                    <Grid container justify ='center' alignItems = 'center' xs={9} style={{backgroundColor:'gray', borderStyle: 'solid'}}>
                        <h1>פרטי הדיווח</h1>
                    </Grid>
                    <Grid container justify ='center' alignItems = 'center' xs={3} style={{backgroundColor:'gray', borderStyle: 'solid'}}>
                        <h1>דיווחים</h1>
                    </Grid>
                    <Grid container xs={6} direction="row">
                        <Grid item container direction="column" spacing={1}>
                            <br></br>
                            <br></br>
                            <Grid justify ='center' alignItems = 'stretch' item className='statusButtons' >
                                    <ToggleButtonGroup value={this.state.selectedButtons} onChange={this.handleFormat} aria-label="text formatting">
                                        <ToggleButton value="bold" aria-label="bold">
                                            <h2>עזרה בקרבתך</h2>
                                        </ToggleButton>
                                        <ToggleButton value="italic" aria-label="italic">
                                            <h2>עזרה בדרך</h2>
                                        </ToggleButton>
                                        <ToggleButton value="underlined" aria-label="underlined">
                                            <h2>הקריאה התקבלה</h2>
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>
                                <br></br>
                                <Grid item>
                                    <img src='map.png' style={{borderStyle: 'solid', width:'300px', height:'200px'}}></img>
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={3} direction="row">
                        <Grid container direction="column">
                            <Grid item>
                                    <h2>מידע נוסף מהמדווח/ת</h2>
                            </Grid>
                            <Grid item className='chatContainer'>
                                    <Chat messages = {this.state.messages} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justify ='center' alignItems = 'right' xs={3} direction="row" style={{borderStyle: 'solid'}}>
                            <Grid item style={{height: '92vh'}}>
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