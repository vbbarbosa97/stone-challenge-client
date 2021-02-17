import { CircularProgress } from '@material-ui/core';
import { Colors } from '../../styles/colors';
import * as S from './styles';

export const Loading = () => {
  return (
    <S.DivLoading>
      <CircularProgress style={{ color: Colors.strongRed }} size={36} />
    </S.DivLoading>
  );
};
