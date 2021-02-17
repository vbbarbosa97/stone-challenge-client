/* eslint-disable no-nested-ternary */
import { IconButton } from '@material-ui/core';
import { IoMdArrowForward } from 'react-icons/io';
import { typeCard } from '../../models/Card';
import { Carousel } from '../../shared/components/Carousel/Carousel';
import { IGenericCard } from '../../shared/components/GenericCard';
import { Loading } from '../../shared/components/Loading';
import { NoResults } from '../../shared/components/NoResults';
import { Colors } from '../../shared/styles/colors';
import * as S from './styles';

interface DashboardProps {
  comicsFavorites: IGenericCard[];
  charactersFavorites: IGenericCard[];
  loadingComics: boolean;
  loadingCharacters: boolean;
  navigateToRoute: (id: string, type: typeCard) => void;
  navigateToSearchCharacter: () => void;
  navigateToSearchComic: () => void;
}

export const Dashboard = ({
  comicsFavorites,
  charactersFavorites,
  loadingComics,
  loadingCharacters,
  navigateToRoute,
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
          <Loading />
        ) : charactersFavorites.length === 0 ? (
          <NoResults />
        ) : (
          <Carousel data={charactersFavorites} navigateToRoute={navigateToRoute} />
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
          <Loading />
        ) : comicsFavorites.length === 0 ? (
          <NoResults />
        ) : (
          <Carousel data={comicsFavorites} navigateToRoute={navigateToRoute} />
        )}
      </S.CustomDiv>
    </S.MainContainer>
  );
};
