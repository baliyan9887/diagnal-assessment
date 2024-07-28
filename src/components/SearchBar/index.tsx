import React, { useContext, useState } from 'react';
import { Search as SearchIcon, XCircle as CloseIcon } from 'react-feather';
import { MovieContext } from '../../context/MovieContext';
import {
  SearchContainer,
  Input,
  FormGroup,
  Label,
} from '../../styles/SearchBar';
import { SearchBarProps } from '../../types';

const SearchBar: React.FC<SearchBarProps> = ({
  isVisible,
  toggleVisibility,
}) => {
  const { setSearchQuery } = useContext(MovieContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <SearchContainer className={isVisible ? 'full' : ''}>
      {!isVisible && <SearchIcon color="#fff" onClick={toggleVisibility} />}
      {isVisible && (
        <FormGroup className={isVisible ? 'visible' : ''}>
          <SearchIcon color="#fff" className="startIcon" />
          <Input
            type="text"
            onChange={handleSearch}
            placeholder="Search for movies..."
          />
          <CloseIcon
            onClick={toggleVisibility}
            color="#fff"
            className="endIcon"
          />
          <Label htmlFor="email">Search</Label>
        </FormGroup>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
