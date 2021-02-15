import styled from 'styled-components';
import { Card } from '@material-ui/core';
import { Colors } from '../../../styles/colors';

interface CardProps {
  imgurl: string;
}

export const Container = styled(Card)<CardProps>`
  display: flex;

  background-image: ${props => `url(${props.imgurl})`};
  background-size: cover;
  background-repeat: no-repeat;

  width: 250px;
  height: 350px;

  &.MuiPaper-rounded {
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  width: 100%;
  padding: 16px;

  color: ${Colors.white};
  background: rgba(0, 0, 0, 0.9);
`;

export const Information = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  > strong {
    font-size: 16px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-top: 32px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > button {
      padding: 6px;

      &.MuiIconButton-root {
        color: ${Colors.white};
      }

      &:hover {
        background: ${Colors.white};

        svg {
          color: ${Colors.strongRed};
        }
      }
    }

    > strong {
      font-size: 12px;
      font-weight: 400;
    }
  }
`;
