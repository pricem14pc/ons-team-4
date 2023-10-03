import { ServerConfiguration } from '../interfaces/serverConfigurationInterface';

export default class ChatGptApiApi {
  config: ServerConfiguration;

  constructor(config: ServerConfiguration) {
    this.config = config;
  }
}
