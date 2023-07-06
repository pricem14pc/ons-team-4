import BlaiseClient from 'blaise-api-node-client';
import express, { Request, Response, Express } from 'express';
import ejs from 'ejs';
import path from 'path';
import { Config } from './config';
import QuestionnaireController from './controllers/questionnaire.controller';
import CaseController from './controllers/case.controller';

export default function nodeServer(config: Config, blaiseApiClient :BlaiseClient): Express {
  const server = express();

  // treat the index.html as a template and substitute the values at runtime
  server.set('views', path.join(__dirname, config.BuildFolder));
  server.engine('html', ejs.renderFile);
  server.use('/static', express.static(path.join(__dirname, `${config.BuildFolder}/static`)));

  // questionnaire routing
  const questionnaireController = new QuestionnaireController(blaiseApiClient);
  server.use('/', questionnaireController.getRoutes());

  // case routing
  const caseController = new CaseController(blaiseApiClient);
  server.use('/', caseController.getRoutes());

  // catch all other routes renders react pages
  server.get('*', (_request: Request, response: Response) => {
    response.render('index.html');
  });

  return server;
}
