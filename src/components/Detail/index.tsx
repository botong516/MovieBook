import {
  Image,
  Rate,
  Descriptions,
  Badge,
  Card,
  Row,
  Col,
  Skeleton,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { queryMovieDetail, MovieDetailResp } from '@/services/detail';
import styles from './index.less';

const { Meta } = Card;

const MovieDetail: React.FC<{ id: string }> = ({ id }) => {
  const [movieDetailResp, setMovieDetailResp] = useState<MovieDetailResp>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await queryMovieDetail(id);
      setMovieDetailResp(data);
    };
    fetchData();
    setLoading(false);
  }, [id]);

  return (
    <div>
      {!movieDetailResp?.id ? (
        <div className={styles.container}>
          <Skeleton active />
        </div>
      ) : (
        <>
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <Image width={400} src={movieDetailResp?.image}></Image>
            </Col>
            <Col className="gutter-row" span={16}>
              <Descriptions bordered>
                <Descriptions.Item label="Title" span={3}>
                  <Badge
                    status="processing"
                    text={
                      movieDetailResp?.title +
                      `  (` +
                      movieDetailResp?.fullTitle +
                      `)`
                    }
                  />
                </Descriptions.Item>
                <Descriptions.Item label="Directors" span={3}>
                  <Badge
                    status="processing"
                    text={movieDetailResp?.directors}
                  />
                </Descriptions.Item>

                <Descriptions.Item label="Writers" span={3}>
                  <Badge status="processing" text={movieDetailResp?.writers} />
                </Descriptions.Item>

                <Descriptions.Item label="Year" span={3}>
                  <Badge status="processing" text={movieDetailResp?.year} />
                </Descriptions.Item>
                <Descriptions.Item label="Runtime" span={3}>
                  <Badge
                    status="processing"
                    text={movieDetailResp?.runtimeStr}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="Plot" span={3}>
                  <Badge status="processing" text={movieDetailResp?.plot} />
                </Descriptions.Item>

                <Descriptions.Item label="Companies" span={3}>
                  <Badge
                    status="processing"
                    text={movieDetailResp?.companies}
                  />
                </Descriptions.Item>

                <Descriptions.Item label="Countries" span={3}>
                  <Badge
                    status="processing"
                    text={movieDetailResp?.countries}
                  />
                </Descriptions.Item>

                <Descriptions.Item label="Awards" span={3}>
                  <Badge status="processing" text={movieDetailResp?.awards} />
                </Descriptions.Item>
                <Descriptions.Item label="Stars" span={3}>
                  <Badge status="processing" text={movieDetailResp?.stars} />
                </Descriptions.Item>
                <Rate allowHalf defaultValue={movieDetailResp?.imDbRating} />
              </Descriptions>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Card title="Actors">
            <Row gutter={16}>
              {movieDetailResp?.actorList?.map((item) => (
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
        </>
      )}
    </div>
  );
};

export default MovieDetail;
