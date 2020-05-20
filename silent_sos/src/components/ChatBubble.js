import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
//from https://github.com/sabinbajracharya/react-chat-bubble/blob/master/src/components/ChatBubble.css
const Chat = (props) => {

  return (
      <div className="chat-list">
        {props.messages.map((message,key)=>{
                    return (<div class="bubble-container bubble-direction-reverse">
                    <img class="img-circle" src="icons8-person-female-48.png"/>
            <div class="bubble me">{message.text}</div></div>);
        })}
      </div>

    
  );
}

export default Chat;