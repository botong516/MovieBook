import { Tabs, Tag, Space, Table, Image } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserFavoriteData, UserMovie } from '@/services/user';
import React, { useCallback } from 'react';
import { history } from 'umi';

const UserFavorite: React.FC<{ userFavoriteData: UserFavoriteData }> = ({
  userFavoriteData,
}) => {
  const toMovieDetail = useCallback((id: string) => {
    history.push('/detail/' + id);
  }, []);

  const columns: ColumnsType<UserMovie> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (_, record) => (
        <a onClick={() => toMovieDetail(record.movieID)}>{record.title}</a>
      ),
    },
    {
      title: 'ThumbnailUrl',
      dataIndex: 'thumbnailUrl',
      key: 'thumbnailUrl',
      render: (text) => <Image src={text} width={100} />,
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      render: (text) => <Tag>{text}</Tag>,
    },
    {
      title: 'Video Description',
      dataIndex: 'videoDescription',
      key: 'videoDescription',
    },
    {
      title: 'VideoTitle',
      dataIndex: 'videoTitle',
      key: 'videoTitle',
    },
    {
      title: 'Tag',
      key: 'thumbnailUrl',
      render: (_, record) => (
        <Space size="middle">
          {record.isWantToWatch ? <Tag>Want to Watch</Tag> : <Tag>Watched</Tag>}
          {record.islike ? <Tag>Liked</Tag> : ''}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Recently Liked" key="1">
          <Table columns={columns} dataSource={userFavoriteData?.likeList} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Watch Later" key="2">
          <Table columns={columns} dataSource={userFavoriteData?.wantToList} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Watch Now!">
          <a
            href="https://www.imdb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to IMDb!
          </a>
          <br />
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to YouTube!
          </a>
          <br />
          <a
            href="https://www.hbomax.com/?utm_id=sa%7c71700000067030777%7c58700007674721711%7cp69454722250&gclid=Cj0KCQjwyOuYBhCGARIsAIdGQRMcdAGLAI3JPUiG631Q6oFNN3uoi1QgiYsKuD1f5V_KcOWEsEJD5YMaArAyEALw_wcB&gclsrc=aw.ds"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to HBO!
          </a>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default UserFavorite;
