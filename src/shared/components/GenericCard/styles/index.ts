import { Card } from '@material-ui/core';
import { MdStar, MdStarBorder } from 'react-icons/md';
import styled, { css, keyframes } from 'styled-components';
import { Colors } from '../../../styles/colors';

interface CardProps {
  imgurl: string;
}

interface StarProps {
  loading: 'yes' | 'no';
}

const appearFromRight = keyframes`
  from {
    opacity:0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const MainContainer = styled(Card)<CardProps>`
  display: flex;

  background-image: ${props => `url(${props.imgurl})`};
  background-size: cover;
  background-repeat: no-repeat;

  width: 250px;
  height: 350px;

  animation: ${appearFromRight} 1s;

  &.MuiPaper-rounded {
    border-radius: 8px;
  }
`;

const animationRotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Star = styled(MdStar)<StarProps>`
  ${props =>
    props.loading === 'yes'
      ? css`
          animation: ${animationRotation} infinite 2s linear;
        `
      : ''}
`;

export const StarBorder = styled(MdStarBorder)<StarProps>`
  ${props =>
    props.loading === 'yes'
      ? css`
          animation: ${animationRotation} infinite 2s linear;
        `
      : ''}
`;

export const CustomDiv = styled.div`
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
