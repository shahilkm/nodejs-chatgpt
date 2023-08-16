import { error } from 'console';
import { Configuration, OpenAIApi } from 'openai';
import readline from 'readline';

const configuration = new Configuration({
  organization: 'org-uXpjP7dLR00ZpONEuOOhko0L',
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
userInterface.prompt();
userInterface.on('line', async (input) => {
  await openai
    .createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: input }],
    })
    .then((result) => {
      console.log(result.data.choices[0].message.content);
      userInterface.prompt();
    })
    .catch((error) => console.log(error));
});
