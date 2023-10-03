import { ONSPanel } from 'blaise-design-system-react-components';
import AsyncContent from '../components/AsyncContent';
import { useAsyncRequest } from '../hooks/useAsyncRequest';
import getData from '../api/NodeApi';

export default function Data() {
  const infoPanelMessage = 'Bonjour tout le monde';

  // TODO: maybe filter surveys returned here - pass user details to node and bring back full list or filtered
  const surveys = useAsyncRequest<string>(getData);

  return (
    <>
      <ONSPanel status="info">
        {infoPanelMessage}
      </ONSPanel>
      <div data-testid="Surveys">
        <AsyncContent content={surveys}>
          {(data:string) => <div>{data}</div> }
        </AsyncContent>
      </div>
    </>
  );
}
