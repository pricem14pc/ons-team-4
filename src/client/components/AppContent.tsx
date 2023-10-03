import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import HouseHoldData from '../pages/HouseHoldData';
import DemographicData from '../pages/DemographicData';

export default function AppContent(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<HouseHoldData />} />
      <Route path="/demographic" element={<DemographicData />} />

    </Routes>
  );
}
