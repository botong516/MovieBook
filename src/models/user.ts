import { useRequest } from 'umi';
import {  message } from 'antd';
import { queryMovies } from '@/services/top250';


const user = () => {
  const msg = useRequest(() => {
    console.log(1111)
    // queryMovieList()
    // const res = queryMovies()
    // console.log(222222, res)
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
    dataSource: msg?.data,
    reload: msg?.run,
    loading: msg?.loading,
    like,
  };
};

export default user