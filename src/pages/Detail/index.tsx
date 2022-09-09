import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from 'umi';
import styles from './index.less';
import MovieDetail from '@/components/Detail';
import { useParams } from 'react-router-dom';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<string>();

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <MovieDetail id={id || ''} />
      </div>
    </PageContainer>
  );
};

export default MovieDetailPage;
