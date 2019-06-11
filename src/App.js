import React from 'react';
import 'typeface-roboto';
import './App.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SendButton from '@material-ui/icons/Send';
import AWS from 'aws-sdk';
AWS.config.update({
  region: 'us-east-1',
});
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: '83934680-77f7-4776-a098-6387314a8701'
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [], // map of [user, msg]
    };
  }

  onSend() {
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

  render() {
    const { history } = this.state;

    history.forEach((phrase, index) => {
      if (index % 2 === 0) { //

      }
    })
    return (
      <div className="App">
        <Box component="div" className="chatBox">
          <Box component="div" className="history">

          </Box>
          <Box component="div" className="inputFooter">
            <Input
              className="input"
              inputProps={{
                'aria-label': 'Type your message...',
              }}
            />
            <IconButton>
              <SendButton />
            </IconButton>
          </Box>
        </Box>
        <Fab color="secondary" aria-label="Add" className="margin" onClick={() => this.onSend()}>
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default App;
