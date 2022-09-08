import { MovieList } from '@/services/search';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Image, List, Space, Input } from 'antd';
import {
  ProList,
} from '@ant-design/pro-components';
import React, { useCallback } from 'react';

const { Search } = Input;

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const MovieSearch: React.FC<{ movies:MovieList[] }> = ({
  movies,
}) => {

  const onSearch  = useCallback(() => {
      console.log(1);
  }, []);

  console.log(777, movies)
  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    <Space>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 1000,
        }}
        dataSource={movies}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
          >
            
            <List.Item.Meta
              avatar={<Image
                width={100}
                src={item.image}
              />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
      </Space>
  </div>
  )
};

export default MovieSearch;