import { Waiting_Api } from "../waitingApi";
import Game_card from "../reusable/gameCard";

type ApiData = {
  games: {
    title: string;
    img: string;
    description: string;
    category: string;
    cost: string;
    trailer: string;
    platform: string;
    release: string;
    publisher: string;
  }[];
};

const Display_games = ({ games }: ApiData) => {
  return (
    <>
      <div className='overflow-hidden w-screen flex items-center justify-center p-3'>
        <div className='flex flex-row justify-between overflow-scroll'>
          {games.length > 0 ? (
            games.map((item) => {
              return <Game_card data={item} key={item.img} />;
            })
          ) : (
            <Waiting_Api />
          )}
        </div>
      </div>
    </>
  );
};

export default Display_games;
