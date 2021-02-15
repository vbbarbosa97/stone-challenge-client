import React from 'react';
import { IGenericCard } from '../../shared/components/GenericCard';
import { Search } from '../../shared/components/Search';

interface ISearchComic {
  data: IGenericCard[];
  loading: boolean;
  firstSearchPerformed: boolean;
  actionSearch: (value: string) => Promise<void>;
  actionNavigateBack: () => void;
}

export const SearchComic = ({
  actionSearch,
  data,
  loading,
  firstSearchPerformed,
  actionNavigateBack,
}: ISearchComic) => {
  const titlePage = 'Revistas';
  const titleSearch = 'Todas Revistas';

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
