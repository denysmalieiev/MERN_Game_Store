import githubLogo from "../assets/github-142-svgrepo-com.svg";
import linkedinLogo from "../assets/linkedin-svgrepo-com.svg";
import gmailLogo from "../assets/gmail-svgrepo-com.svg";

export const Footer = () => {
  return (
    <>
      <div className='bg-blue-600 bottom-0 h-fit text-gray-200 p-4 space-y-3  font-medium'>
        <div>© 2024 Sony Interactive Entertainment</div>

        <div className='text-sm'>
          All content, games titles, trade names and/or trade dress, trademarks,
          artwork and associated imagery are trademarks and/or copyright
          material of their respective owners. All rights reserved.
        </div>
        <div className='grid md:grid-cols-3 grid-cols-2 space-x-4'>
          <div className='flex flex-col space-y-2'>
            <div className='text-2xl text-white'>About</div>
            <span className='text-sm hover:underline'>About SIE </span>
            <span className='text-sm hover:underline'>Careers </span>
            <span className='text-sm hover:underline'>
              PlayStation Studios{" "}
            </span>
            <span className='text-sm hover:underline'>
              PlayStation Productions{" "}
            </span>
            <span className='text-sm hover:underline'>Corporate </span>
          </div>

          <div className='flex flex-col space-y-2'>
            <div className='text-2xl text-white'>Products</div>
            <span className='text-sm hover:underline'>PS5 </span>
            <span className='text-sm hover:underline'>PS4 </span>
            <span className='text-sm hover:underline'>PS VR2 </span>
            <span className='text-sm hover:underline'>PS Plus </span>
          </div>

          <div className='flex flex-col space-y-2'>
            <div className='text-2xl text-white'>Accessories</div>
            <span className='text-sm hover:underline '>Games </span>
            <span className='text-sm hover:underline'>Values </span>
            <span className='text-sm hover:underline'>Environment </span>
            <span className='text-sm hover:underline'>Accessibility </span>
            <span className='text-sm hover:underline'>Online safety </span>
            <span className='text-sm hover:underline'>
              Diversity, equity & inclusion{" "}
            </span>
          </div>

          <div className='flex flex-col space-y-2'>
            <div className='text-2xl text-white'>Support</div>
            <span className='text-sm hover:underline'>Support hub </span>
            <span className='text-sm hover:underline'>PlayStation Safety </span>
            <span className='text-sm hover:underline'>PSN Status </span>
            <span className='text-sm hover:underline'>
              PlayStation Repairs{" "}
            </span>
            <span className='text-sm hover:underline'>Password reset </span>
          </div>

          <div className='flex flex-col space-y-2'>
            <div className='text-2xl text-white'>Manuals</div>
            <span className='text-sm hover:underline'>Resources </span>
            <span className='text-sm hover:underline'>
              PSN terms of service{" "}
            </span>
            <span className='text-sm hover:underline'>
              PS Store cancellation policy{" "}
            </span>
            <span className='text-sm hover:underline'>Age ratings </span>
            <span className='text-sm hover:underline'>Health warning </span>
            <span className='text-sm hover:underline'>Developers </span>
            <span className='text-sm hover:underline'>Glossary</span>
          </div>

          <div>
            <div className='text-2xl text-white'>Contact Us</div>
            <nav className=' flex md:flex-row items-center mr-2'>
              <a href='https://github.com/Shafiquedev256?tab=overview&from=2024-01-01&to=2024-01-30'>
                <img src={githubLogo} />
              </a>
              <a href='https://www.linkedin.com/in/musinguzi-shafiq-ug?trk=contact-info'>
                <img src={linkedinLogo} />
              </a>
              <a href='mailto:shafiquedev256@gmail.com?subject=Hiring Musinguzi Shafiq wed dev'>
                <img src={gmailLogo} />
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className='bg-black text-2xl text-white font-bold w-screen p-2 text-right font-sans'>
        Shafiq
      </div>
    </>
  );
};
