import React, { useState } from 'react';
import { Grommet } from 'grommet';

const App = () => {

  const theme = {
    global: {
      colors: {
        brand: '#FF7417'
      },
      font: {
        family: 'Roboto',
        size: '27px',
        height: '30px',
      },
    },
  };

  const renderView = () => {
    if (view === 'login') {
      return <TerminalEmulator />
    } else {
      return <Loading />
    }
  }

  return (
    // <Grommet theme={theme} full>
    //     {renderView()}
    // </Grommet>
    <>
      Test text...
    </>
  )
};

export default App;