import React from 'react';
import { IGenericCard } from '../../shared/components/GenericCard';
import { Search } from '../../shared/components/Search';

interface ISearchCharacter {
  data: IGenericCard[];
  loading: boolean;
  firstSearchPerformed: boolean;
  actionSearch: (value: string) => Promise<void>;
  actionNavigateBack: () => void;
}

export const SearchCharacter = ({
  actionSearch,
  data,
  loading,
  firstSearchPerformed,
  actionNavigateBack,
}: ISearchCharacter) => {
  const titlePage = 'Personagens';
  const titleSearch = 'Todos Personagens';

  return (
    <Search
      loading={loading}
      firstSearchPerformed={firstSearchPerformed}
      actionSearch={actionSearch}
      titlePage={titlePage}
      titleSearch={titleSearch}
      data={data}
      actionNavigateBack={actionNavigateBack}
    />
  );
};
