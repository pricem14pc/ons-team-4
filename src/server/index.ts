import dotenv from 'dotenv';
import nodeServer from './server';
import ServerConfigurationProvider from './configuration/ServerConfigurationProvider';

// create/get configuration
dotenv.config(); // TODO: only needed for running locally
const config = new ServerConfigurationProvider();

// create server
const server = nodeServer(config);

// run server
server.listen(config.Port, () => {
  /* eslint-disable no-console, no-control-regex */
  console.log(`Example app listening on port ${config.Port}`);
});
