/* eslint-disable no-nested-ternary */
import { CircularProgress, IconButton } from '@material-ui/core';
import { IoMdArrowForward } from 'react-icons/io';
import * as S from './styles';
import { Carousel } from '../../shared/components/Carousel/Carousel';
import { IGenericCard } from '../../shared/components/GenericCard';
import { Colors } from '../../shared/styles/colors';
import NoResultImg from '../../assets/noResults.svg';

interface DashboardProps {
  comicsFavorites: IGenericCard[];
  charactersFavorites: IGenericCard[];
  loadingComics: boolean;
  loadingCharacters: boolean;
  navigatetoRoute: (id: string) => void;
  navigateToSearchCharacter: () => void;
  navigateToSearchComic: () => void;
}

export const Dashboard = ({
  comicsFavorites,
  charactersFavorites,
  loadingComics,
  loadingCharacters,
  navigatetoRoute,
  navigateToSearchCharacter,
  navigateToSearchComic,
}: DashboardProps) => {
  return (
    <S.MainContainer>
      <S.CustomDiv>
        <S.DivHeader>
          <h3>Personagens</h3>
          <S.CustomDivContainer>
            <span>Ver mais</span>
            <IconButton onClick={navigateToSearchCharacter}>
              <IoMdArrowForward color={Colors.strongRed} />
            </IconButton>
          </S.CustomDivContainer>
        </S.DivHeader>

        {loadingCharacters ? (
          <S.DivLoading>
            <CircularProgress style={{ color: Colors.strongRed }} size={36} />
          </S.DivLoading>
        ) : charactersFavorites.length === 0 ? (
          <S.DivNoResult>
            <img src={NoResultImg} alt="NoResults" />
            <strong>Nenhum resultado encontrado.</strong>
          </S.DivNoResult>
        ) : (
          <Carousel data={charactersFavorites} navigatetoRoute={navigatetoRoute} />
        )}
      </S.CustomDiv>

      <S.CustomDiv>
        <S.DivHeader>
          <h3>Comics</h3>
          <S.CustomDivContainer>
            <span>Ver mais</span>
            <IconButton onClick={navigateToSearchComic}>
              <IoMdArrowForward color={Colors.strongRed} />
            </IconButton>
          </S.CustomDivContainer>
        </S.DivHeader>

        {loadingComics ? (
          <S.DivLoading>
            <CircularProgress style={{ color: Colors.strongRed }} size={36} />
          </S.DivLoading>
        ) : comicsFavorites.length === 0 ? (
          <S.DivNoResult>
            <img src={NoResultImg} alt="NoResults" />
            <strong>Nenhum resultado encontrado.</strong>
          </S.DivNoResult>
        ) : (
          <Carousel data={comicsFavorites} navigatetoRoute={navigatetoRoute} />
        )}
      </S.CustomDiv>
    </S.MainContainer>
  );
};
