import { BookOutlined, HeartOutlined, HistoryOutlined, PlayCircleOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import styles from '.components/Home.less'

const items: MenuProps['items'] = [
  {
    label: 'Liked',
    key: 'heart',
    icon: <HeartOutlined />,
  },
  {
    label: 'Want to Watch',
    key: 'want',
    icon: <BookOutlined />,
  },
  {
    label: 'Watched',
    key: 'watched',
    icon: <HistoryOutlined />,
  },
  {
    label: (
      <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">
        Watch Now!
      </a>
    ),
    key: 'IMDb',
    icon: <PlayCircleOutlined />
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;