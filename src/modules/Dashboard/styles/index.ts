import styled from 'styled-components';
import { Colors } from '../../../shared/styles/colors';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
`;

export const CustomDiv = styled.div`
  width: 100%;
  padding: 36px 15%;

  @media (max-width: 600px) {
    padding: 36px 5%;
  }
`;

export const DivLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

export const CustomDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > h3 {
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${Colors.strongRed};
    font-weight: bold;
  }
`;

export const DivNoResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px;

  > img {
    width: 100px;
    height: 100px;
  }

  > strong {
    font-size: 14px;
    padding: 16px 0px;
  }
`;
