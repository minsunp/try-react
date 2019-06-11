# Read me
This project was an attempt to create a separate frontend for our Chatbot. Later we
realized it would take more time than we expected, so we decided to use the chatbot interface
given with the AWS Lex bot.

This project includes a json file (Team-11-FAQ.json) that we created to be fed into the
lex bot. This json was created based on the FAQ database provided from UNHCR.

# Instructions to deploy our project
Go to the blog post [here](https://aws.amazon.com/blogs/machine-learning/creating-a-question-and-answer-bot-with-amazon-lex-and-amazon-alexa/) and follow the instructions.
After the stack has spun up and you have logged in to the content designer, go to the hamburger menu and click on 'Import'.
Select the included Team-11-FAQ.json and import it. The imported questions should appear in the UI.

To add the Alexa skill functionality, follow the instructions mentioned in the content designer.
