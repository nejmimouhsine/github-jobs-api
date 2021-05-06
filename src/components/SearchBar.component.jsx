import React from "react";
import styled from "styled-components";

import SearchIcon from "../assets/desktop/icon-search.svg";
import LocationIcon from "../assets/desktop/icon-location.svg";

const SearchBar = () => {
  return (
    <FilterContainer>
      <SearchWrapper>
        <SearchImg src={SearchIcon} alt="Search Icon" />
        <SearchInput
          type="text"
          placeholder="Filter by title, companies, expertise..."
        />
      </SearchWrapper>

      <LocationWrapper>
        <LocationImg src={LocationIcon} alt="Search Icon" />
        <LocationInput type="text" placeholder="Filter by Location..." />
      </LocationWrapper>

      <SubmitWrapper>
        <FullTimeCheck type="checkbox" />
        <span>Full Time Only</span>
        <SubmitSearch>Search</SubmitSearch>
      </SubmitWrapper>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  height: 70px;
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 30% 30%;
  padding: 0 15px;
  border-radius: 10px;
  margin-top: -30px;
  background-color: #fff;
  box-shadow: -1px 10px 21px -2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -1px 10px 21px -2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 10px 21px -2px rgba(0, 0, 0, 0.2);
`;

const SearchWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid #e9e9e9;
`;
const SearchImg = styled.img`
  height: 20px;
  margin: 0 15px;
`;
const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  border: none;
`;

const LocationWrapper = styled(SearchWrapper)``;
const LocationImg = styled(SearchImg)``;
const LocationInput = styled(SearchInput)``;

const SubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
const FullTimeCheck = styled.input`
  width: 20px;
  height: 20px;
`;
const SubmitSearch = styled.button``;

export default SearchBar;
