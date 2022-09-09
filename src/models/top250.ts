import { useRequest } from 'umi';
import { message } from 'antd';
import { queryMovieList } from '@/services/top250';
import { savelike, saveWantTo } from '@/services/user';

const useMovieList = () => {
  const fetchData = async () => {
    const data = await queryMovieList();
    return data;
  };

  const like = async (id: string) => {
    try {
      await savelike(id);
      message.success('success');
    } catch (error) {
      message.error('fail');
    }
  };

  const wantTo = async (id: string) => {
    try {
      await saveWantTo(id);
      message.success('success');
    } catch (error) {
      message.error('fail');
    }
  };

  return {
    fetchData,
    wantTo,
    like,
  };
};

export default useMovieList;
