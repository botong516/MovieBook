import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from 'umi';
import styles from './index.less';
import MovieDetail from '@/components/Detail';

const MovieDetailPage: React.FC = () => {
  const { dataSource, reload, loading, like }  = useModel('detail');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <MovieDetail movies={dataSource?.items} />
      </div>
    </PageContainer>
  );
};

export default MovieDetailPage;