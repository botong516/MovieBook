import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from 'umi';
import styles from './index.less';
import UserFavorite from '@/components/User';
import { UserFavoriteData } from '@/services/user';

const MovieDetailPage: React.FC = () => {
  const { dataSource, reload, loading, like } = useModel('userFavorite');
  const [userFavoriteData, setUserFavoriteData] = useState<UserFavoriteData>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await reload();
      setUserFavoriteData(data);
    };
    fetchData();
  }, []);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <UserFavorite
          userFavoriteData={
            userFavoriteData ?? { likeList: [], wantToList: [] }
          }
        />
      </div>
    </PageContainer>
  );
};

export default MovieDetailPage;
