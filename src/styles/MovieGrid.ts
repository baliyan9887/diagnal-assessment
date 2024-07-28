import styled from 'styled-components';

export const GridContainer = styled.div`
  background-color: #171717;
  color: #ffffff;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  padding: 20px;

  /* Tablet: 4 items per row */
  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  /* Desktop: 6 items per row */
  @media (min-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const Card = styled.div``;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
`;
export const Title = styled.p`
  width: 100%;

  padding: 5px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin: 0;
  box-sizing: border-box;
`;
