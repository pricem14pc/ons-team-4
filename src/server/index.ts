import dotenv from 'dotenv';
import nodeServer from './server';
import ServerConfigurationProvider from './configuration/ServerConfigurationProvider';
import OpenAiApi from './api/OpenAiApi';
import OpenAI from 'openai';

// create/get configuration
dotenv.config(); // TODO: only needed for running locally
const config = new ServerConfigurationProvider();

// create open ai client
const openAi = new OpenAI({
  apiKey: config.openAiKey,
});

// create openai api
const openAiApi = new OpenAiApi(openAi);

// create server
const server = nodeServer(config, openAiApi);

// run server
server.listen(config.Port, () => {
  /* eslint-disable no-console, no-control-regex */
  console.log(`Example app listening on port ${config.Port}`);
});
