import React from 'react';
import { Button } from '@material-ui/core';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';
import HouseIcon from '@material-ui/icons/House';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import HealingIcon from '@material-ui/icons/Healing';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
     const { active, completed } = props;

    const icons = {
            1: <CheckCircleIcon />,
            2: <PeopleOutlineIcon />,
            3: <HouseIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
            [classes.active]: active,
            [classes.completed]: completed,
            })}>
            {icons[String(props.icon)]}
        </div>
    );
}

export default class SenderStatus extends React.Component {

    render() {
        const steps = ['הקריאה התקבלה', 'עזרה בדרך', 'עזרה בקרבתך'];

        const iconButton = {
            color: "white",
            fontSize: "60px",
        };

        const item = {
            border: "2px solid gray",
            margin: "5px",
            width: "44%",
            height: "150px"
        };

        const textArea = {
            height: "50px",
            textAlign: "right",
            padding: "6px"
    }

        const hideButton = {
            color: "gray",
            border: "2px solid gray",
            margin: "10px",
        };


        return (
        <div>
             <div class="top-navigation" >
                <Button href='/' style={hideButton} size="medium">הסתר</Button>
             </div>

             <div class="status">

                <Stepper alternativeLabel  connector={<ColorlibConnector />}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
             </div>

             <div style={{padding: "10px"}}>
                <h3>בחר/י מידע נוסף שכדאי לשתף</h3>
                <FormControlLabel style={item}
                    control={<Checkbox icon={<ChildCareIcon  style={ iconButton }/> }
                                        checkedIcon={<ChildCareIcon  style={{ fontSize: 60 }}/>}
                    name="checkedA" />}
                    label={<p style={{color:"white" }}>ילדים בסביבה</p>}
                    labelPlacement="bottom"
                />

                <FormControlLabel style={item}
                    control={<Checkbox icon={<HealingIcon  style={ iconButton }/>}
                                        checkedIcon={<HealingIcon  style={{ fontSize: 60 }}/>}
                    name="checkedA" />}
                    label={<p style={{color:"white" }}> זקוק/ה לסיוע רפואי </p>}
                    labelPlacement="bottom"
                />
             </div>

             <div style={{paddingBottom: "10px"}}>
                <input type="text" style={textArea} placeholder="טקסט חופשי"/>
             </div>
             <Button style={{backgroundColor: "gray"}}>שלח</Button>
    </div>
    );
    }
}
