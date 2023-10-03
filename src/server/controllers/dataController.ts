import express, { Request, Response } from 'express';
import { Controller } from '../interfaces/controllerInterface';
import notFound from '../helpers/axiosHelper';
import OpenAiApi from '../api/OpenAiApi';

export default class DataController implements Controller {
  openAiApi: OpenAiApi;

  constructor(openAiApi: OpenAiApi) {
    this.openAiApi = openAiApi;
    this.getData = this.getData.bind(this);
    console.debug('openAiApi', this.openAiApi.getResponse());
  }

  getRoutes() {
    const router = express.Router();
    return router.get('/api/data', this.getData);
  }

  async getData(_request: Request, response: Response<string>) {
    try {
      const test = await this.openAiApi.getResponse();
      return response.status(200).json(test);
    } catch (error: unknown) {
      if (notFound(error)) {
        return response.status(404).json();
      }
      return response.status(500).json();
    }
  }
}
