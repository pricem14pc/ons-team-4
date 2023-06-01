import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Questionnaires() {
  const [questionnaires, setQuestionnaires] = useState<{ name:string }[]>([]);

  useEffect(() => {
    async function fetchQuestionnaires() {
      const response = await axios.get('http://localhost:3100/questionnaires');
      return response.data;
    }

    fetchQuestionnaires().then(setQuestionnaires);
  }, []);
  return (
    <div>
      {questionnaires.map((questionnaire) => {
        if ('name' in questionnaire) return questionnaire.name;
        return null;
      })}
    </div>
  );
}
