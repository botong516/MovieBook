import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from 'umi';
import { Skeleton } from 'antd';
import styles from './index.less';
import MovieList from '@/components/Top250';
import { Movies } from '@/services/top250';

const MovieSearchPage: React.FC = () => {
  const { fetchData, wantTo, like } = useModel('top250');
  const [movieList, setMovieList] = useState<Movies>();

  useEffect(() => {
    const useFetchData = async () => {
      const data = await fetchData();
      setMovieList(data);
    };
    useFetchData();
  }, []);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        {!movieList ? (
          <div className={styles.container}>
            <Skeleton active />
          </div>
        ) : (
          <MovieList
            movies={movieList?.items || []}
            like={like}
            wantTo={wantTo}
          />
        )}
      </div>
    </PageContainer>
  );
};

export default MovieSearchPage;
