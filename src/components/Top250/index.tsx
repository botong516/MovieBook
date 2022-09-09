import { movie } from '@/services/top250';
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  StarFilled,
} from '@ant-design/icons';
import { Image, List, Space, Tag, Badge, Rate } from 'antd';
import React, { useCallback, useState } from 'react';
import { history } from 'umi';

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const MovieSearch: React.FC<{
  movies: movie[];
  like: (id: string) => void;
  wantTo: (id: string) => void;
}> = ({ movies, like, wantTo }) => {
  // const [star, setStar] = useState<boolean>(false);

  const detail = useCallback((id: string) => {
    history.push('/detail/' + id);
  }, []);

  // const starFuc = useCallback(() => {
  // }, []);

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
              <div
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.stopPropagation();
                  wantTo(item.id);
                  // starFuc();
                }}
              >
                <IconText
                  icon={StarOutlined}
                  text="Want To Watch"
                  key="list-vertical-star-o"
                />
              </div>,

              // eslint-disable-next-line react/jsx-key
              <div
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.stopPropagation();
                  like(item.id);
                }}
              >
                <IconText
                  icon={LikeOutlined}
                  text="Like"
                  key="list-vertical-like-o"
                />
              </div>,
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
            <Rate allowHalf defaultValue={item.imDbRating / 2} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default MovieSearch;
