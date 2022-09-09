import { useRequest } from 'umi';
import { message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { queryMovieList, queryMovies, Movies } from '@/services/top250';

const useMovieList = () => {
  const [movies, setMovies] = useState<Movies>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await queryMovieList();
      setMovies(data);
    };
    fetchData();
  }, []);

  const like = async (id: string) => {
    try {
      // await removeProducts(id);
      message.success('success');
    } catch (error) {
      message.error('fail');
    }
  };

  return {
    dataSource: movies,
    reload: '',
    loading: '',
    like,
  };
};

export default useMovieList;
