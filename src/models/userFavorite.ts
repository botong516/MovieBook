import { message } from 'antd';
import { queryFavorite, UserFavorite } from '@/services/user';

const userFavorite = () => {
  // const [userFavoriteData, setUserFavoriteData] = useState<UserFavorite>();

  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   const data = await queryFavorite();
  //   //   setUserFavoriteData(data || {});
  //   // };
  //   // fetchData();
  // }, []);

  const fetchData = async () => {
    const data = await queryFavorite();
    return data;
  };

  const like = async () => {
    try {
      message.success('success');
    } catch (error) {
      message.error('fail');
    }
  };

  return {
    dataSource: '',
    reload: fetchData,
    loading: '',
    like,
  };
};

export default userFavorite;
