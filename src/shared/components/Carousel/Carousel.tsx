import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { typeCard } from '../../../models/Card';
import GenericCard, { IGenericCard } from '../GenericCard';
import * as S from './styles';

interface CarouselProps {
  data: IGenericCard[];
  navigateToRoute: (id: string, type: typeCard) => void;
}

export const Carousel = ({ data, navigateToRoute }: CarouselProps) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const quantityCards = 3;

  const prevSlide = () => {
    const resetToVeryBack = currentCardIndex === 0;

    const index = resetToVeryBack ? data.length - 1 : currentCardIndex - 1;

    setCurrentCardIndex(index);
  };

  const nextSlide = () => {
    const resetIndex = currentCardIndex === data.length - 1;

    const index = resetIndex ? 0 : currentCardIndex + 1;

    setCurrentCardIndex(index);
  };

  const activeCardSourcesFromState = data.slice(currentCardIndex, currentCardIndex + quantityCards);

  const cardSourcesToDisplay =
    activeCardSourcesFromState.length < quantityCards && data.length > quantityCards
      ? [...activeCardSourcesFromState, ...data.slice(0, quantityCards - activeCardSourcesFromState.length)]
      : activeCardSourcesFromState;

  return (
    <S.MainContainer>
      {data.length > quantityCards && (
        <IconButton onClick={prevSlide}>
          <FaChevronLeft size={20} />
        </IconButton>
      )}
      {cardSourcesToDisplay.map((card: IGenericCard) => (
        <S.CustomDiv key={Math.random()}>
          <GenericCard
            key={card.title}
            imgUrl={card.imgUrl}
            isFavorite={card.isFavorite}
            title={card.title}
            type={card.type}
            id={card.id}
            actionAddFavorite={card.actionAddFavorite}
            actionRemoveFavorite={card.actionRemoveFavorite}
            linkDetail={card.linkDetail}
            actionNavigate={() => navigateToRoute(card.id, card.type)}
          />
        </S.CustomDiv>
      ))}
      {data.length > quantityCards && (
        <IconButton onClick={nextSlide}>
          <FaChevronRight size={20} />
        </IconButton>
      )}
    </S.MainContainer>
  );
};
