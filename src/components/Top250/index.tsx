import { movie } from '@/services/top250';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Image, List, Space, Tag, Badge, Rate } from 'antd';
import React, { useCallback } from 'react';
import { history } from 'umi';

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const MovieSearch: React.FC<{ movies: movie[] }> = ({ movies }) => {
  const wantTo = useCallback((id: string) => {
    console.log(11111111, id);
    // history.push('/table?id='+ id);
  }, []);

  const like = useCallback((id: string) => {
    console.log(11111111, id);
    // history.push('/table/'+ id);
  }, []);

  const detail = useCallback((id: string) => {
    console.log(11111111, id);
    history.push('/detail/' + id);
  }, []);

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 1000,
        }}
        dataSource={movies}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            onClick={() => detail(item.id)}
            actions={[
              // eslint-disable-next-line react/jsx-key
              <div onClick={() => wantTo(item.id)}>
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />
              </div>,

              // eslint-disable-next-line react/jsx-key
              <div onClick={() => like(item.id)}>
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />
              </div>,

              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Image width={100} src={item.image} />}
              title={item.fullTitle}
              description={item.crew}
            />
            <Badge.Ribbon text={item.imDbRatingCount} />
            {/* <Tag color="green">{item.rank}</Tag> */}
            <Tag color="green">{item.year}</Tag>
            <Rate allowHalf defaultValue={item.imDbRating} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default MovieSearch;
