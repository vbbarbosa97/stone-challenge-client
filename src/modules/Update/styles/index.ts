import { Button, Card, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Colors } from '../../../shared/styles/colors';

export const MainContainer = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding: 0px 15%;

  @media (max-width: 639px) {
    padding: 0px 5%;
  }
`;

export const CustomCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`;

export const Logo = styled.img`
  width: 100%;
  height: 300px;
`;

export const CustomTitle = styled(Typography)`
  padding-top: 32px;
  &.MuiTypography-h5 {
    font-weight: bold;
  }
`;

export const CustomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomDivButton = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px;

  @media (max-width: 639px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CustomButton = styled(Button)`
  &.MuiButton-root {
    margin: 5px;
    color: ${Colors.white};
    width: 200px;
    height: 56px;
    font-weight: bold;
    background-color: ${Colors.strongRed};

    transition: 0.3s;

    &:hover {
      color: ${Colors.white};
      background-color: ${Colors.strongRed};
      opacity: 0.7;
    }
  }
`;

export const CustomButtonCancel = styled(Button)`
  &.MuiButton-root {
    margin: 5px;
    color: ${Colors.white};
    width: 200px;
    height: 56px;
    font-weight: bold;
    background-color: ${Colors.black};

    transition: 0.3s;

    &:hover {
      color: ${Colors.white};
      background-color: ${Colors.black};
      opacity: 0.7;
    }
  }
`;
