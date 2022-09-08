import { movie } from '@/services/top250';
import { Image, Avatar,  Descriptions, Badge, Tooltip } from 'antd';
import React from 'react';


const MovieDetail: React.FC<{ movies:movie[] }> = ({
  movies,
}) => {
  return (
    <div>
      <Descriptions title={<Image width={200} src='https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg'></Image>} layout="vertical">
        <Descriptions.Item label="fullTitle" span={2}>Inception (2010)</Descriptions.Item>
        <Descriptions.Item label="year">2010</Descriptions.Item>
        <Descriptions.Item label="releaseDate">2010-07-16</Descriptions.Item>
        <Descriptions.Item label="runtimeStr" span={2}>2h 28min</Descriptions.Item>
        <Descriptions.Item label="Status" span={3}>
          <Badge status="processing" text="A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster." />
        </Descriptions.Item>
        <Descriptions.Item label="awards">
          <Badge status="processing" text="Top rated movie #13 | Won 4 Oscars, 157 wins & 220 nominations total" />
        </Descriptions.Item>
        <Descriptions.Item label="directors">Christopher Nolan</Descriptions.Item>
        <Descriptions.Item label="stars">
          <Badge status="processing" text="Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page" />
        </Descriptions.Item>
        <Descriptions.Item label="Config Info">
        <Avatar.Group
          maxCount={2}
          maxPopoverTrigger="click"
          size="large"
          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
        >
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar style={{ backgroundColor: '#87d068' }}  />
          </Tooltip>
          <Avatar style={{ backgroundColor: '#1890ff' }} />
        </Avatar.Group>
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
};

export default MovieDetail;