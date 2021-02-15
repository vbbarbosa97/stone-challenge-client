import React from 'react';
import GenericCard from '../../shared/components/GenericCard';

export const Dashboard = () => {
  return (
    <div style={{ margin: 150, display: 'flex', flexDirection: 'row' }}>
      <GenericCard
        title="Spider-Girl (Anya Corazon)"
        type="Character"
        isFavorite
        imgUrl="http://i.annihil.us/u/prod/marvel/i/mg/a/10/528d369de3e4f.jpg"
      />
      <GenericCard
        title="Spider-Girl (Anya Corazon)"
        type="Character"
        isFavorite={false}
        imgUrl="http://i.annihil.us/u/prod/marvel/i/mg/a/10/528d369de3e4f.jpg"
      />
    </div>
  );
};
