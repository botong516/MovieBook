import { message } from 'antd';
import { queryMovieList } from '@/services/search';
import { savelike, saveWantTo } from '@/services/user';

const useSearch = () => {
  // const [movies, setMovies] = useState<SearchMovieResp>();

  const fetchData = async (keyword: string) => {
    const data = await queryMovieList(keyword);
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
    like,
    wantTo,
  };
};

export default useSearch;
