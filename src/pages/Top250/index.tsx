import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from 'umi';
import styles from './index.less';
import MovieList from '@/components/Top250';

const MovieSearchPage: React.FC = () => {
  const { dataSource, reload, loading, like } = useModel('top250');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <MovieList movies={dataSource?.items} />
      </div>
    </PageContainer>
  );
};

export default MovieSearchPage;
