import { ONSPanel } from 'blaise-design-system-react-components';
import AsyncContent from '../components/AsyncContent';
import { useAsyncRequest } from '../hooks/useAsyncRequest';
import { getDemographicData } from '../api/NodeApi';

export default function DemographicData() {
  const infoPanelMessage = 'OPEN AI, If inflation rates rise will household expenditure increase or descrease for under 25 year olds?';

  // TODO: maybe filter surveys returned here - pass user details to node and bring back full list or filtered
  const demographicData = useAsyncRequest<string>(getDemographicData);

  return (
    <>
      <ONSPanel status="info">
        {infoPanelMessage}
      </ONSPanel>
      <div data-testid="Surveys">
        <AsyncContent content={demographicData}>
          {(data:string) => <div>{data}</div> }
        </AsyncContent>
      </div>
    </>
  );
}
