import githubLogo from "../assets/github-142-svgrepo-com.svg"
import linkedinLogo from "../assets/linkedin-svgrepo-com.svg" 
import gmailLogo from "../assets/gmail-svgrepo-com.svg" 

export const Footer = ()=>{
  
  return(
    <>
    <div className="bg-blue-600 bottom-0 h-fit text-gray-200 p-4 space-y-3 ">
<div>© 2024 Sony Interactive Entertainment</div> 

<div className="text-sm">All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners. All rights reserved.</div>
<div className="md:grid md:grid-cols-3 ">

<div className="flex flex-col space-y-2">
<div className="font-bold text-white">About</div>
<span className="text-sm">About SIE </span>
<span className="text-sm">Careers </span>
<span className="text-sm">PlayStation Studios </span>
<span className="text-sm">PlayStation Productions </span>
<span className="text-sm">Corporate </span>
</div>

<div className="flex flex-col space-y-2">
<div className="font-bold text-white">Products</div>
<span className="text-sm">PS5 </span>
<span className="text-sm">PS4 </span>
<span className="text-sm">PS VR2 </span>
<span className="text-sm">PS Plus </span> 
</div>

<div className="flex flex-col space-y-2">
<div className="font-bold text-white">Accessories</div>
<span className="text-sm">Games </span>
<span className="text-sm">Values </span>
<span className="text-sm">Environment </span>
<span className="text-sm">Accessibility </span>
<span className="text-sm">Online safety </span>
<span className="text-sm">Diversity, equity & inclusion </span> 
</div>

<div className="flex flex-col space-y-2">
<div className="font-bold text-white">Support</div>
<span className="text-sm">Support hub </span>
<span className="text-sm">PlayStation Safety </span>
<span className="text-sm">PSN Status </span>
<span className="text-sm">PlayStation Repairs </span>
<span className="text-sm">Password reset </span> 
</div> 

<div className="flex flex-col space-y-2">
<div className="font-bold text-white">Manuals</div>
<span className="text-sm">Resources </span>
<span className="text-sm">PSN terms of service </span>
<span className="text-sm">PS Store cancellation policy </span>
<span className="text-sm">Age ratings </span>
<span className="text-sm">Health warning </span>
<span className="text-sm">Developers </span>
<span className="text-sm">Glossary</span> 
</div> 

<div>
<div className="font-bold text-white">Contact Us</div>
        <nav className=" flex md:flex-col items-center mr-2">
       <a href="https://github.com/Shafiquedev256?tab=overview&from=2024-01-01&to=2024-01-30"><img src={githubLogo}/></a>
       <a href="https://www.linkedin.com/in/musinguzi-shafiq-ug?trk=contact-info"><img src={linkedinLogo}/></a>
       <a href="mailto:shafiquedev256@gmail.com?subject=Hiring Musinguzi Shafiq wed dev"><img src={gmailLogo}/></a>
        </nav>
</div>

</div>
    </div> 
    <div className="bg-black text-2xl text-white font-bold w-screen p-2 text-right font-sans">Shafiq</div>
    </>
    )
}