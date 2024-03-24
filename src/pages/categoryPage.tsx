import { Header } from "../components/header";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState, AppDispatch } from "../redux/store";
import { fetchGames } from "../redux/getGamesSlice";
import Display_games from "../components/reusable/displayGames";

const Category_page = () => {
  const { category } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const dataEl = useSelector((state: RootState) => state.GamesReducer.all);
  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const filtered = dataEl.filter((item) => item.category === category);

  return (
    <>
      <Header />
      <h1 className='font-light text-3xl p-4 text-gray-400'>
        Top {category} games
      </h1>
      <Display_games games={filtered} />
    </>
  );
};

export default Category_page;
