import React, { useCallback, useState } from 'react';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from 'umi';
import MovieSearch from '@/components/Sesrch';
import { SearchMovieResp } from '@/services/search';

const MovieSearchPage: React.FC = () => {
  const { fetchData, like, wantTo } = useModel('useSearch');
  // const [movieList, setMovieList] = useState<SearchMovieResp>();

  // const onSearch = useCallback((value: string) => {
  //   const useFetchData = async () => {
  //     const data = await fetchData();
  //     setMovieList(data);
  //   };
  //   return useFetchData();
  // }, []);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <MovieSearch fetchData={fetchData} like={like} wantTo={wantTo} />
      </div>
    </PageContainer>
  );
};

export default MovieSearchPage;
