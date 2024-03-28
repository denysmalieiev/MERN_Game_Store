import { useNavigate } from "react-router-dom";

export const MiniMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className=' md:bg-none md:hidden md:h-fit'>
        <div className=' grid grid-cols-2 gap-1 bg-black md:bg-opacity-50 md:w-[100%]  md:flex md:flex-row  p-1'>
          <div
            onClick={() => navigate("/category/Action")}
            className="md:w-fit  md:rounded-full  md:bg-none bg-[url('https://media.istockphoto.com/id/816841586/photo/close-up-of-man-shooting-with-machine-gun.jpg?s=612x612&w=0&k=20&c=JhG98k0bEKoQLHaJJw80d4m0m7_F9cdFJVY0nqkK00s=')] category_menu "
          >
            <span className='category_menu_span md:w-fit md:rounded-full'>
              Action
            </span>
          </div>
          <div
            onClick={() => {
              navigate("/category/Race");
            }}
            className="category_menu md:bg-none bg-[url('https://media.istockphoto.com/id/1408422160/photo/close-up-on-mans-hands-at-home-sitting-on-a-couch-in-stylish-loft-apartment-and-playing.jpg?s=612x612&w=0&k=20&c=s6hfGUuq8i1mzcvwSrLjWs4JF-6nnEOmst5DyOgXCO0=')]"
          >
            <span className='category_menu_span md:w-fit md:p-2 md:rounded-full'>
              Race
            </span>
          </div>
          <div
            onClick={() => {
              navigate("/category/sports");
            }}
            className="category_menu md:bg-none bg-[url('https://media.istockphoto.com/id/1254450615/photo/man-playing-video-game-at-home-sitting-on-coach-sofa-in-front-of-television-with-play-game.jpg?s=612x612&w=0&k=20&c=H2wv-3F63x9Kkb4QNjoyPdulA2A2gh5pwTrTNpB-FYs=')]"
          >
            <span className='category_menu_span md:w-fit md:p-2 md:rounded-full'>
              Sports
            </span>
          </div>
          <div
            onClick={() => {
              navigate("/category/Adventure");
            }}
            className="category_menu md:bg-none bg-[url('https://media.istockphoto.com/id/1339405075/photo/futuristic-viking-warrior-battle.jpg?s=612x612&w=0&k=20&c=xXtplORasSNdQLMwI1JJVSnJNjMHXhewLhAjTcUiI1s=')]"
          >
            <span className='category_menu_span md:w-fit md:p-2 md:rounded-full'>
              Adventure
            </span>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};
