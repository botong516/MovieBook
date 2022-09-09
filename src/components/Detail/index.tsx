import { Image, Avatar,  Descriptions, Badge, Card, Row,Col } from 'antd';
import React , { useEffect, useState } from 'react';
import { queryMovieDetail, MovieDetailResp } from '@/services/detail';

const { Meta } = Card;


const MovieDetail: React.FC<{ id:string }> = ({
  id
}) => {
  const [movieDetailResp, setMovieDetailResp] = useState<MovieDetailResp>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await queryMovieDetail(id);
      setMovieDetailResp(data);
    }
    fetchData()
  }, [id]);

  return (
    <div>
      <Descriptions title={<Image width={300} src={movieDetailResp?.image}></Image>}  bordered>
        <Descriptions.Item label="FullTitle">
          <Badge status="processing" text={movieDetailResp?.title} />
        </Descriptions.Item>
        <Descriptions.Item label="Directors">
          <Badge status="processing" text={movieDetailResp?.directors} />
        </Descriptions.Item>
        <Descriptions.Item label="Year">{movieDetailResp?.year}</Descriptions.Item>
        <Descriptions.Item label="Runtime">{movieDetailResp?.runtimeMins} min</Descriptions.Item>
        <Descriptions.Item label="Status" span={3}>
          <Badge status="processing" text={movieDetailResp?.plot} />
        </Descriptions.Item>
        <Descriptions.Item label="Awards" span={3}>
          <Badge status="processing" text={movieDetailResp?.awards} />
        </Descriptions.Item>
        <Descriptions.Item label="Stars" span={3}>
          <Badge status="processing" text={movieDetailResp?.stars} />
        </Descriptions.Item>
      </Descriptions>

      <Card title="Actors" >
        <Row gutter={16}>
          {movieDetailResp?.actorList.map(item => (
             <Col key={item.id} className="gutter-row" span={4}>
              <Card
                hoverable
                style={{ width: 180 }}
                cover={<img alt="example" src={item.image} />}
              >
              <Meta title={item.name} description={item.asCharacter} />
            </Card>
          </Col>
          ))}
      </Row>
      </Card>
          
    </div>
  )
};

export default MovieDetail;