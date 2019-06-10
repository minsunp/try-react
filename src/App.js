import React from 'react';
import 'typeface-roboto';
import { makeStyles } from '@material-ui/core/styles';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function onSend() {
  var AWS = require('aws-sdk');
  AWS.config.update({region: 'us-east-1'});

  var lexruntime = new AWS.LexRuntime();

  var params = {
    botAlias: 'BotAliaskFUPsdz', /* required, has to be '$LATEST' */
    botName: 'un_chatbot_BotZA', /* required, the name of you bot */
    inputText: 'testytest', /* required, your text */
    userId: 'admin', /* required, arbitrary identifier */
    /*
    sessionAttributes: {
      someKey: 'STRING_VALUE',
    }
    */
  };

  lexruntime.postText(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}

function App() {
  const classes = useStyles();

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  return (
    <div className={classes.App}>
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Hello! What can I do for you?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}, nice to meet you!',
              end: true,
            },
          ]}
        />
      </ThemeProvider>
      <Fab color="secondary" aria-label="Add" className={classes.margin} onClick={() => onSend()}>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default App;

const useStyles = makeStyles({
  App: {
    backgroundColor: '#0072bc', // rgb(0, 114, 188)
    height: '900px',
  },
  toggleChat: {
    color: '#0072bc',
  },
  lockBottom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  chatBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#BC9A6A',
    width: '200px',
    height: '400px',
    marginRight: '100px',
  },
});
