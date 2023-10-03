import express, { Request, Response } from 'express';
import { Controller } from '../interfaces/controllerInterface';
import notFound from '../helpers/axiosHelper';
import OpenAiApi from '../api/OpenAiApi';

export default class DataController implements Controller {
  openAiApi: OpenAiApi;

  constructor(openAiApi: OpenAiApi) {
    this.openAiApi = openAiApi;
    this.getHouseholdData = this.getHouseholdData.bind(this);
    this.getDemographicData = this.getDemographicData.bind(this);
  }

  getRoutes() {
    const router = express.Router();
    router.get('/api/data/household', this.getHouseholdData);
    return router.get('/api/data/demographic', this.getDemographicData);
  }

  async getHouseholdData(_request: Request, response: Response<string>) {
    try {
      const test = await this.openAiApi.getHouseholdResponse();
      return response.status(200).json(test);
    } catch (error: unknown) {
      if (notFound(error)) {
        return response.status(404).json();
      }
      return response.status(500).json();
    }
  }

  async getDemographicData(_request: Request, response: Response<string>) {
    try {
      const test = await this.openAiApi.getHouseholdDemographicResponse();
      return response.status(200).json(test);
    } catch (error: unknown) {
      if (notFound(error)) {
        return response.status(404).json();
      }
      return response.status(500).json();
    }
  }
}
