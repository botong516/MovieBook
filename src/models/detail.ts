import { useRequest } from 'umi';
import { message } from 'antd';
import { queryMovies } from '@/services/top250';

const useMovieList = () => {
  const msg = useRequest(() => {
    // queryMovieList()
    const res = queryMovies();

    return res;
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
    dataSource: msg?.data ?? [],
    reload: msg?.run,
    loading: msg?.loading,
    like,
  };
};

export default useMovieList;
