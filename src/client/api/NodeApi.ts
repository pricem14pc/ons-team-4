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

export default async function getData(): Promise<string> {
  return getDataFromNode('/api/data', 'Unable to find data, please contact your data administrator');
}
