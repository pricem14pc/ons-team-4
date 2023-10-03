import { ServerConfiguration } from '../interfaces/serverConfigurationInterface';
import {

  getNumberOrThrowError,
} from '../helpers/configurationHelper';

export default class ServerConfigurationProvider implements ServerConfiguration {
  BuildFolder: string;

  Port: number;

  constructor() {
    const {
      PORT,
    } = process.env;

    this.BuildFolder = '../build';

    this.Port = getNumberOrThrowError(PORT, 'PORT');
  }
}
