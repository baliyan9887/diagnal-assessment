import React, { useState } from 'react';
import { ArrowLeft as ArrowLeftIcon } from 'react-feather';
import SearchBar from '../SearchBar';

import { AppBarContainer, AppBarTitle } from '../../styles/AppBar';

const AppBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <AppBarContainer>
      {!isVisible && (
        <AppBarTitle>
          <ArrowLeftIcon />
          Romantic Comedy
        </AppBarTitle>
      )}
      <SearchBar isVisible={isVisible} toggleVisibility={toggleVisibility} />
    </AppBarContainer>
  );
};

export default AppBar;
