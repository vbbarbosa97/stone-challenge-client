import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 32px;

  @media (max-width: 653px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 32px;
  }
`;

export const CustomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
`;
