import { useRequest } from 'umi';
import { Button, message } from 'antd';
import { queryMovies, queryMovieList } from '@/services/movies';

export default function useMovieList(params: { pageSize: number; current: number }) {
  const msg = useRequest(() =>{
    console.log(1111)
    const res = queryMovies()
    console.log(2222, res)
    return res
  });

  const like = async (id: string) => {
    try {
      // await removeProducts(id);
      message.success('success');
      msg.run();
    } catch (error) {
      message.error('fail');
    }
  };


  return {
    dataSource: msg.data,
    reload: msg.run,
    loading: msg.loading,
    like,
  };
}