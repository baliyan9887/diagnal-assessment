import styled from 'styled-components';

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: #171717;
  padding: 0px 10px 0px 10px;
  z-index: 10;
`;

export const AppBarTitle = styled.p`
  font-size: 22px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
`;
