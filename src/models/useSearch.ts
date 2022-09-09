import { useRequest } from 'umi';
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { queryMovieList, SearchMovieResp } from '@/services/search';

const useSearch = () => {
  // const [movies, setMovies] = useState<SearchMovieResp>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await queryMovieList();
  //     setMovies(data)
  //   }
  //   fetchData()
  // }, []);

  const like = async (id: string) => {
    try {
      // await removeProducts(id);
      // console.log(id, keyword);
      message.success('success');
    } catch (error) {
      message.error('fail');
    }
  };

  return {
    dataSource: '',
    reload: '',
    loading: '',
    like,
  };
};

export default useSearch;
