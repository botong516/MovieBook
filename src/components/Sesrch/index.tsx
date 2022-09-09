import { MovieList } from '@/services/search';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Image, List, Space, Input, Empty } from 'antd';
import { ProList } from '@ant-design/pro-components';
import React, { useCallback, useState } from 'react';
import { queryMovieList, SearchMovieResp } from '@/services/search';
import { history } from 'umi';

const { Search } = Input;

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const MovieSearch: React.FC<{ movies: MovieList[] }> = ({}) => {
  const [keyword, setKeyword] = useState<string>('');
  const [movieList, setMovieList] = useState<MovieList[]>();

  const onSearch = useCallback(
    (value: any) => {
      setKeyword(value);
      const fetchData = async () => {
        const data = await queryMovieList(value);
        setMovieList(data?.results);
      };
      fetchData();
    },
    [keyword],
  );

  const detail = useCallback((id: string) => {
    console.log(11111111, id);
    history.push('/detail/' + id);
  }, []);

  return (
    <div>
      <Search
        placeholder="input search movie title"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      {movieList ? (
        <List
          itemLayout="vertical"
          size="large"
          // pagination={{
          //   onChange: page => {
          //     console.log(page);
          //   },
          //   pageSize: 1000,
          // }}
          dataSource={movieList}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              onClick={() => detail(item.id)}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
              ]}
            >
              <List.Item.Meta
                avatar={<Image width={100} src={item.image} />}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      ) : keyword ? (
        <Empty />
      ) : (
        ''
      )}
    </div>
  );
};

export default MovieSearch;
