import './App.css';
import { ReactElement } from 'react';
import AppContent from './components/AppContent';
import LayoutTemplate from './components/LayoutTemplate';

function App(): ReactElement {
  return (
    <LayoutTemplate>
      <AppContent />
    </LayoutTemplate>
  );
}

export default App;
