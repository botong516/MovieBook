import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from 'umi';
import styles from './index.less';
import User from '@/components/User';

const MovieDetailPage: React.FC = () => {
  const { dataSource, reload, loading, like } = useModel('user');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <User movies={dataSource?.results} />
      </div>
    </PageContainer>
  );
};

export default MovieDetailPage;
