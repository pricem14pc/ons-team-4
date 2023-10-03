import { ServerConfiguration } from '../interfaces/serverConfigurationInterface';
import {

  getNumberOrThrowError, getStringOrThrowError,
} from '../helpers/configurationHelper';

export default class ServerConfigurationProvider implements ServerConfiguration {
  BuildFolder: string;
  openAiKey: string;
  Port: number;

  constructor() {
    const {
      OPENAI_API_KEY,
      PORT,
    } = process.env;

    this.BuildFolder = '../build';
    this.openAiKey = getStringOrThrowError(OPENAI_API_KEY, 'OPENAI_API_KEY')
    this.Port = getNumberOrThrowError(PORT, 'PORT');
  }
}
