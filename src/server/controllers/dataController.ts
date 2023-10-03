import express, { Request, Response } from 'express';
import { Controller } from '../interfaces/controllerInterface';
import notFound from '../helpers/axiosHelper';

export default class DataController implements Controller {
  getRoutes() {
    const router = express.Router();
    return router.get('/api/data', this.getData);
  }

  /* eslint-disable no-console, class-methods-use-this */
  async getData(_request: Request, response: Response<string>) {
    try {
      return response.status(200).json('Hello World');
    } catch (error: unknown) {
      if (notFound(error)) {
        return response.status(404).json();
      }
      return response.status(500).json();
    }
  }
}
