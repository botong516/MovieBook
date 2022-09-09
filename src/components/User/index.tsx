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
          {record.isWantToWatch ? <Tag>想看</Tag> : <Tag>看过</Tag>}
          {record.islike ? <Tag>喜欢</Tag> : ''}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="点赞列表" key="1">
          <Table columns={columns} dataSource={userFavoriteData?.likeList} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="收藏列表" key="2">
          <Table columns={columns} dataSource={userFavoriteData?.wantToList} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default UserFavorite;
