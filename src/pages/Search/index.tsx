import React from 'react';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from 'umi';
import MovieSearch from '@/components/Sesrch';

const MovieSearchPage: React.FC = () => {
  const { dataSource, reload, loading, like } = useModel('useSearch');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <MovieSearch movies={dataSource?.results} />
      </div>
    </PageContainer>
  );
};

export default MovieSearchPage;
