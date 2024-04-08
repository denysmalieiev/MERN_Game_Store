import { useEffect, Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchGames } from "../redux/getGamesSlice";
import { Header } from "../components/header";
import { MiniMenu } from "../components/minimenu";
import Display_games from "../components/reusable/displayGames";
import { Footer } from "../components/footer";
const Promo = lazy(() => import("../components/promo"));

export const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.GamesReducer.all);
  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const trendingGames = data.filter((_item, index) => index < 6);
  const popularGames = data.filter((_item, index) => index < 15 && index > 9);
  const recommendedGames = data.filter((_item, index) => index > 10);
  const upComingGames = data.filter((_item, index) => index < 10 && index > 5);

  return (
    <>
      <Header />
      <div className='overflow-hidden w-screen'>
        {recommendedGames.length > 0 ? (
          <Suspense
            fallback={
              <div className=' md:w-screen md:block hidden md:bg-gray-300 md:animate-pulse md:h-[359px] '></div>
            }
          >
            <Promo data={recommendedGames} />
          </Suspense>
        ) : (
          <div className=' md:w-screen md:block hidden md:bg-gray-300 md:animate-pulse md:h-[359px] '></div>
        )}

        <MiniMenu />

        <div>
          <div className='bg-red-700  mb-2  text-white font-bold p-2'>
            Trending
          </div>
          <Display_games games={trendingGames} />
        </div>

        <div>
          <div className='bg-red-700  mb-2  text-white font-bold p-2'>
            Popular
          </div>
          <Display_games games={popularGames} />
        </div>

        <div>
          <div className='bg-red-700  mb-2  text-white font-bold p-2'>
            Recommended
          </div>
          <Display_games games={recommendedGames} />
        </div>
        <div>
          <div className='bg-red-700 text-white font-bold p-2'>Upcoming</div>
          <Display_games games={upComingGames} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
