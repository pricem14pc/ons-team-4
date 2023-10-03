import { Footer, Header, NotProductionWarning } from 'blaise-design-system-react-components';
import React from 'react';

const divStyle = {
  minHeight: 'calc(67vh)',
};

interface LayoutTemplateProps {
  children: React.ReactNode;
}

export default function LayoutTemplate({ children }: LayoutTemplateProps) {
  const navigationLinks = [
    {
      endpoint: '/',
      id: 'Houehold',
      label: 'Houehold income',
    },
    {
      endpoint: '/demographic',
      id: 'demographic',
      label: 'demographic income',
    },
  ];

  return (

    <>
      <NotProductionWarning />
      <Header
        title="Household budget predictor"
        noSave
        signOutButton={false}
        navigationLinks={navigationLinks}
      />
      <div style={divStyle} className="ons-page__container ons-container" data-testid="app-content">

        {children}
      </div>
      <Footer />
    </>
  );
}
