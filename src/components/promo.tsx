import { ApiData } from "../redux/getGamesSlice";
import { Link } from "react-router-dom";

type Data = {
  data: ApiData[];
};

export const Promo = ({ data }: Data) => {
  const featured = data[1];

  return (
    <>
      {data.length > 0 ? (
        <div className=' rounded-lg  shadow-md relative md:w-fit  w-screen md:h-fit'>
          <img
            src={featured.img}
            alt='Featured Game'
            className='w-screen h-[100%] md:h-[23rem] '
          />
          <div className='md:absolute md:top-0 w-[100%] md:h-[100%] p-6 md:bg-black md:bg-opacity-20 bg-white '>
            <h2 className='text-2xl font-semibold text-gray-600 md:text-gray-200 mb-2 '>
              {featured.title}
            </h2>
            <p className='text-gray-600 md:text-gray-200  mb-4 h-[150px] md:h-[210px] md:w-[250px] w-[200px] overflow-hidden'>
              {featured.description}
            </p>
            <Link
              to={`details/${featured.title}`}
              className='bg-purple-700 text-white px-4 py-2 rounded-full inline-block hover:bg-purple-800 transition duration-300'
            >
              View Game
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
