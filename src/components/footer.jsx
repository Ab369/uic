import FooterText from "../ui-comp/footertext";
import logo from '../assets/uic-logo.png'
import InteractiveHoverButton from "../ui-comp/hoverbtn";
import SocialMediaIcons from "../ui-comp/social";
import { useNavigate } from "react-router-dom";

const Footer=()=>{
    const navigate=useNavigate();
    return(
        <div className="flex flex-col">
        <div className="text-white flex lg:flex-row flex-col justify-between lg:pr-16 lg:pl-10 px-2 mt-5 lg:mx-8 mx-2 md:rounded-2xl border-t-2 border-gray-400 py-6">

            <div className="left flex items-center gap-3 max-md:pl-20 max-lg:pl-52">
            <img src={logo} className="md:w-28 md:h-32 w-16"></img>
            <FooterText/>
            </div>
           
            <div className="md:text-4xl text-2xl text-center lg:flex flex-col grid grid-cols-3 md:gap-8 gap-4 mt-8  lg:ml-48">

            <div className="flex flex-col lg:gap-8 gap-6 col-span-2">
            <h1>Navigate</h1>
            <div className="flex flex-col items-center gap-5 md:text-2xl text-xl">
            <InteractiveHoverButton><p onClick={()=>navigate('/events')}>Events</p></InteractiveHoverButton>
            <InteractiveHoverButton><p onClick={()=>navigate('/team')}>Team</p></InteractiveHoverButton>
            <InteractiveHoverButton><p onClick={() => window.open('https://innowizion.vercel.app/', '_blank', 'noopener,noreferrer')}
 >Innowizion</p></InteractiveHoverButton>
            <InteractiveHoverButton><p onClick={()=>navigate('/contact')}>Contact</p></InteractiveHoverButton>
            </div>
            </div>

            {/* for phone an tab */}
            <div className="lg:hidden text-center flex items-center flex-col   gap-6 col-span-1 mt-1">
             <h1 className="md:text-4xl text-2xl">Connect</h1>
            <SocialMediaIcons/>
            </div>

            </div>

            <div className="max-lg:hidden text-center flex flex-col gap-8 mt-8">
             <h1 className="text-4xl">Connect with us</h1>
            <SocialMediaIcons/>
            </div>

        </div>

        <div className="max-md:hidden flex justify-between text-gray-300 border-t-2 pt-2 pb-4 px-8 border-gray-400">
            <h1>Institution's Innovation Council</h1>
            <h1 className="cursor-pointer" onClick={()=>{
                 window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
            }}>Top of the page ↑</h1>
            <h1>University Innovation Cell</h1>
        </div>

        <div className="md:hidden flex justify-between text-gray-300 border-t-2 pt-2 pb-4 px-8 border-gray-400">
            <h1>IIC</h1>
            <h1 className="cursor-pointer" onClick={()=>{
                 window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
            }}>Top of the page ↑</h1>
            <h1>UIC</h1>
        </div>
        </div>
    )
}

export default Footer;