import React from 'react';
import Launches from './components/Launches.js';
import './App.css';
import styled from "styled-components";

const AppDiv = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppDiv>
      <Launches />
    </AppDiv>
  );
}

export default App;
