import axios from 'axios';
import { IQuestionnaire } from 'blaise-api-node-client';
import { ICaseDetails } from '../../server/interfaces/case.details.interface';
import errorNotFound from '../../server/controllers/axios.helper';

export async function getQuestionnaires(): Promise<IQuestionnaire[]> {
  try {
    const response = await axios.get('/api/questionnaires');
    return response.data;
  } catch (error) {
    if (errorNotFound(error)){
      throw new Error('Unable to find questionnaires, please contact Richmond Rice');
    }
    throw new Error('Unable to retrieve questionnaires, please try again in a few minutes');
  }
}

export async function getListOfCases(questionnaireName: string): Promise<ICaseDetails[]> {
  const response = await axios.get(`/api/questionnaires/${questionnaireName}/cases`);
  return response.data;
}
