// src/App.tsx

import React from 'react';
import { MovieProvider } from './context/MovieContext';
import MovieGrid from './components/MovieGrid';
import AppBar from './components/AppBar';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #171717;
  min-height: 100vh;
  padding: 10px;
  box-sizing: border-box;
`;

const App: React.FC = () => {
  return (
    <MovieProvider>
      <AppBar />
      <AppContainer>
        <MovieGrid />
      </AppContainer>
    </MovieProvider>
  );
};

export default App;
