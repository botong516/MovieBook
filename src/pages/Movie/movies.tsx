import { useModel } from 'umi';
import MovieList from '@/components/MovieList';

export default function Page() {
  const { dataSource, reload, like } = useModel('useMovieList');
  return (
    <div>
      <a onClick={() => reload()}>reload</a>
      <MovieList movies={dataSource?.items} />
    </div>
  );
}
