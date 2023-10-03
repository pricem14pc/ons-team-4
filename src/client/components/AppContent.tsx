import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import HouseHold from '../pages/HouseHold';
import Demographic from '../pages/Demographic';

export default function AppContent(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<HouseHold />} />
      <Route path="/demographic" element={<Demographic />} />
    </Routes>
  );
}
