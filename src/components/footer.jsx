import FooterText from "../ui-comp/footertext";
import logo from '../assets/uic-logo.png'
import InteractiveHoverButton from "../ui-comp/hoverbtn";
import SocialMediaIcons from "../ui-comp/social";

const Footer=()=>{
    return(
        <div className="flex flex-col">
        <div className="text-white flex md:flex-row flex-col justify-between md:pr-16 md:pl-10 px-2 mt-5 md:mx-8 mx-2 md:rounded-2xl border-t-2 py-6">

            <div className="left flex items-center gap-3 max-md:pl-20">
            <img src={logo} className="md:w-28 md:h-32 w-16"></img>
            <FooterText/>
            </div>
           
            <div className="md:text-4xl text-2xl text-center md:flex flex-col grid grid-cols-3 gap-8 mt-10  md:ml-48">

            <div className="flex flex-col gap-4 col-span-2">
            <h1>Navigate</h1>
            <div className="flex flex-col gap-2 md:text-2xl text-xl">
            <InteractiveHoverButton>Events</InteractiveHoverButton>
            <InteractiveHoverButton>Team</InteractiveHoverButton>
            <InteractiveHoverButton>Gallery</InteractiveHoverButton>
            <InteractiveHoverButton>Contact</InteractiveHoverButton>
            </div>
            </div>

            {/* for phone */}
            <div className="md:hidden text-center flex items-center flex-col  gap-2 col-span-1">
             <h1 className="md:text-4xl text-2xl">Connect</h1>
            <SocialMediaIcons/>
            </div>

            </div>

            <div className="max-md:hidden text-center flex flex-col gap-8 mt-8">
             <h1 className="text-4xl">Connect with us</h1>
            <SocialMediaIcons/>
            </div>

        </div>

        <div className="max-md:hidden flex justify-between text-gray-300 border-t-2 pt-2 pb-4 px-8">
            <h1>Institution's Innovation Council</h1>
            <h1 className="cursor-pointer" onClick={()=>{
                 window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
            }}>Top of the page ↑</h1>
            <h1>University Innovation Cell</h1>
        </div>

        <div className="md:hidden flex justify-between text-gray-300 border-t-2 pt-2 pb-4 px-8">
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