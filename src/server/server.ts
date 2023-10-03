import express, { Request, Response, Express } from 'express';
import ejs from 'ejs';
import path from 'path';
import DataController from './controllers/dataController';
import ConfigurationProvider from './configuration/ServerConfigurationProvider';

export default function nodeServer(config: ConfigurationProvider): Express {
  const server = express();

  // treat the index.html as a template and substitute the values at runtime
  server.set('views', path.join(__dirname, config.BuildFolder));
  server.engine('html', ejs.renderFile);
  server.use('/static', express.static(path.join(__dirname, `${config.BuildFolder}/static`)));

  // survey routing
  const surveyController = new DataController();
  server.use('/', surveyController.getRoutes());

  // catch all other routes renders react pages
  server.get('*', (_request: Request, response: Response) => {
    response.render('index.html');
  });

  return server;
}
