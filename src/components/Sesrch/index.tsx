import { MovieList } from '@/services/search';
import { LikeOutlined, StarOutlined, StarFilled } from '@ant-design/icons';
import { Image, List, Space, Input, Empty, Skeleton } from 'antd';
import React, { useCallback, useState } from 'react';
import { SearchMovieResp } from '@/services/search';
import styles from './index.less';
import { history } from 'umi';

const { Search } = Input;

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const MovieSearch: React.FC<{
  fetchData: (keyword: string) => SearchMovieResp;
  like: (id: string) => void;
  wantTo: (id: string) => void;
}> = ({ fetchData, like, wantTo }) => {
  const [keyword, setKeyword] = useState<string>('');
  const [movieList, setMovieList] = useState<MovieList[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [star, setStar] = useState<boolean>(false);

  const onSearch = useCallback(
    async (value: any) => {
      setLoading(true);
      setKeyword(value);
      const resp = await fetchData(value);
      console.log(1111, resp.results);
      setMovieList(resp?.results);
      setLoading(false);
    },
    [keyword],
  );

  // const star = useCallback(() => {

  // }, []);

  const detail = useCallback((id: string) => {
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
      {loading ? (
        <div className={styles.container}>
          <Skeleton active />
        </div>
      ) : movieList ? (
        <List
          itemLayout="vertical"
          size="large"
          // pagination={{
          //   onChange: page => {
          //     console.log(page);
          //   },ant-spin-container
          //   pageSize: 1000,
          // }}
          dataSource={movieList}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              onClick={() => detail(item.id)}
              actions={[
                <div
                  key={item.id}
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    wantTo(item.id);
                  }}
                >
                  <IconText
                    icon={StarOutlined}
                    text="156"
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
                    text="156"
                    key="list-vertical-like-o"
                  />
                </div>,
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
