import express, { Request, Response, Express } from 'express';
import ejs from 'ejs';
import path from 'path';
import DataController from './controllers/dataController';
import ConfigurationProvider from './configuration/ServerConfigurationProvider';
import OpenAiApi from './api/OpenAiApi';

export default function nodeServer(config: ConfigurationProvider, openAiApi: OpenAiApi): Express {
  const server = express();

  // treat the index.html as a template and substitute the values at runtime
  server.set('views', path.join(__dirname, config.BuildFolder));
  server.engine('html', ejs.renderFile);
  server.use('/static', express.static(path.join(__dirname, `${config.BuildFolder}/static`)));

  // data routing
  const dataController = new DataController(openAiApi);
  server.use('/', dataController.getRoutes());

  // catch all other routes renders react pages
  server.get('*', (_request: Request, response: Response) => {
    response.render('index.html');
  });

  return server;
}
