import ReactPlayer from "react-player/youtube";
import { ApiData } from "../../redux/getGamesSlice";
type Selected = {
  selected: ApiData;
};

export const GameInfo = ({ selected }: Selected) => {
  return (
    <>
      <div>
        <div className='md:flex md:flex-row md:justify-evenly'>
          <div>
            <h1 className='text-3xl font-light text-white ml-4 text-center'>
              Description
            </h1>
            <div className=' text-gray-400 font-light w-[90%] p-3'>
              {selected.description}
            </div>
          </div>

          <div>
            <h1 className='text-3xl font-light text-white ml-4 text-center'>
              Videos
            </h1>

            <div className='relative w-screen md:w-[640px]'>
              <ReactPlayer url={selected.trailer} width='100%' />
            </div>
          </div>
        </div>
      </div>
      <h2 className='font-light text-2xl text-center text-white'>
        Game and Legal Info
      </h2>
      <div className='text-white md:flex md:flex-row px-6 md:justify-evenly md:items-center  '>
        <div className='md:w-1/5 py-6 md:py-0'>
          <div className='flex flex-row justify-between items-center  md:items-start'>
            <span>Platform</span>
            <span className='font-bold'>PS4</span>
          </div>

          <div className='flex flex-row justify-between items-center md:items-start'>
            <span>Release:</span>
            <span className='font-bold '>12/23/24</span>
          </div>
          <div className='flex flex-row justify-between items-center     md:items-start'>
            <span>Publisher:</span>
            <span className='font-bold '>Sony</span>
          </div>
          <div className='flex flex-row justify-between items-center  md:items-start'>
            <span>Genre:</span>
            <span className='font-bold '>Action</span>
          </div>
        </div>
        <div className='text-sm space-y-3 py-4 text-gray-400 md:w-3/5'>
          <p>
            To play this game on PS5, your system may need to be updated to the
            latest system software. Although this game is playable on PS5, some
            features available on PS4 may be absent. See PlayStation.com/bc for
            more details.
          </p>

          <p>
            Online features require an account and are subject to terms of
            service and applicable privacy policy
            (playstationnetwork.com/terms-of-service &
            playstationnetwork.com/privacy-policy).
          </p>
          <p>
            Software subject to license (us.playstation.com/softwarelicense).
          </p>
          <p>
            You can download and play this content on the main PS5 console
            associated with your account (through the “Console Sharing and
            Offline Play” setting) and on any other PS5 consoles when you login
            with your same account.
          </p>
        </div>
      </div>
    </>
  );
};
