import { useRequest } from 'umi';
import {  message } from 'antd';
import { SearchMovieList } from '@/services/search';


const useSearch = () => {
  const msg = useRequest(() =>{
    const res = SearchMovieList()
    return res
  });

  const like = async (id: string) => {
    try {
      // await removeProducts(id);
      // console.log(id, keyword);
      message.success('success');
      msg.run();
    } catch (error) {
      message.error('fail');
    }
  };
  console.log(2222, msg?.data??[])
  return {
    dataSource: msg.data,
    reload: msg.run,
    loading: msg.loading,
    like,
  };
};

export default useSearch