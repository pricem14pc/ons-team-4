import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Data from '../pages/Data';

export default function AppContent(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Data />} />
    </Routes>
  );
}
