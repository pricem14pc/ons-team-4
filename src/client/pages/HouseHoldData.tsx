import { ONSPanel } from 'blaise-design-system-react-components';
import AsyncContent from '../components/AsyncContent';
import { useAsyncRequest } from '../hooks/useAsyncRequest';
import { getHouseholdData } from '../api/NodeApi';

export default function HouseholdData() {
  const infoPanelMessage = 'OPEN AI, If inflation rates rise will household expenditure increase or descrease?';

  // TODO: maybe filter surveys returned here - pass user details to node and bring back full list or filtered
  const householdData = useAsyncRequest<string>(getHouseholdData);

  return (
    <>
      <ONSPanel status="info">
        {infoPanelMessage}
      </ONSPanel>
      <div data-testid="Surveys">
        <AsyncContent content={householdData}>
          {(data:string) => <div>{data}</div> }
        </AsyncContent>
      </div>
    </>
  );
}
