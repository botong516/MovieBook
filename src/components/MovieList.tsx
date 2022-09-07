import { movie } from '@/services/movies';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Image, List, Space, Tag, Badge, Card } from 'antd';
import React from 'react';

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const MovieList: React.FC<{ movies:movie[] }> = ({
  movies,
}) => {

  return (
    <div>
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
              title={item.fullTitle}
              description={item.crew}
            />
            <Badge.Ribbon text={item.imDbRatingCount} />
            {/* <Tag color="green">{item.rank}</Tag> */}
            <Tag color="green">{item.year}</Tag>
            <Tag color="green">{item.imDbRating}</Tag>
          </List.Item>
        )}
      />
  </div>
  )
};

export default MovieList;