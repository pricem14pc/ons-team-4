import axios from 'axios';
import notFound from '../../server/helpers/axiosHelper';

async function getDataFromNode<T>(url: string, notFoundError: string): Promise<T> {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    if (notFound(error)) {
      throw new Error(notFoundError);
    }
    throw new Error('Unable to complete request, please try again in a few minutes');
  }
}

export async function getHouseholdData(): Promise<string> {
  return getDataFromNode('/api/data/husehold', 'Unable to find data, please contact your data administrator');
}
export async function getDemographicData(): Promise<string> {
  return getDataFromNode('/api/data/demographic', 'Unable to find data, please contact your data administrator');
}
