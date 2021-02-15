import styled from 'styled-components';
import { Input } from '@material-ui/core';

export const CustomInput = styled(Input)`
  &.MuiInput-underline:after {
    border-bottom: none;
    padding: 10px;
  }
`;
