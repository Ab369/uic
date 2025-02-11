// import transition from "../utils/transition";
// import React from "react";
// import "../App.css";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import XIcon from "@mui/icons-material/X";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// const Contact = () => {
//   return (
//     <div className="text-3xl text-white">
//       <div className=" shadow-2xl">
//         <div className="contact-cont mx-auto  shadow-2xl" id="contact">
          
//           <div className="con-form">
//             <div className="contact-info">
//               <h3 className="title">Let's get in touch</h3>
//               <p className="text">
//                 University Innovation Cell 
//               </p>

//               <div className="info">
//                 <div className="information">

//                   <p>
//                     Madan Mohan Malaviya University of Technology, Gorakhpur
//                   </p>
//                 </div>
//                 <div className="information">
//                   <p>uicmmmut@gmail.com</p>
//                 </div>
               
//               </div>

//               <div className="social-media">
//                 <p className="">Connect with us :</p>
//                 <div className="social-icons">
//                   <a href="https://www.facebook.com//uicmmmut">
//                     <FacebookIcon />
//                   </a>
//                   <a href="https://x.com/uicmmmut">
//                     <XIcon />
//                   </a>
//                   <a href="https://www.instagram.com/uicmmmut/">
//                     <InstagramIcon />
//                   </a>
//                   <a href="https://www.linkedin.com/company/uicmmmut/">
//                     <LinkedInIcon />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="contact-form">
//               <span className="circle one"></span>
//               <span className="circle two"></span>

//               <form action="" autocomplete="off">
//                 <h3 className="title text-xl heading-white text-white">
//                   Contact us
//                 </h3>
               
//                 <div className="input-container">
//                   <input type="email" name="email" className="input" />
//                   <label for="">Email</label>
//                   <span>Email</span>
//                 </div>
//                 <div className="input-container">
//                   <input type="tel" name="phone" className="input" />
//                   <label for="">Phone</label>
//                   <span>Phone</span>
//                 </div>
//                 <div className="input-container textarea">
//                   <textarea name="message" className="input"></textarea>
//                   <label for="">Message</label>
//                   <span>Message</span>
//                 </div>
//                 <input type="submit" value="Send" className="btn" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default transition(Contact);

import transition from "../utils/transition";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      infoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="text-white  flex items-center justify-center bg-black py-10 px-5">
      <div className="w-full max-w-5xl shadow-lg rounded-lg bg-gray-900 sm:p-10 p-5 flex flex-col md:flex-row items-center">
        {/* Contact Info */}
        <div ref={infoRef} className="md:w-1/2 text-center md:text-left p-5">
          <h3 className="text-2xl font-bold text-orange-500">Let's get in touch</h3>
          <p className="text-gray-300 mt-2 font-bold">University Innovation Cell</p>
          <p className="text-gray-400 mt-1">
            Madan Mohan Malaviya University of Technology, Gorakhpur
          </p>
          <p className="text-gray-400 mt-1">uicmmmut@gmail.com</p>
          
          <div className="mt-5">
            <p className="text-gray-300">Connect with us:</p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              <a href="" target="_blank" className="text-orange-500 hover:text-orange-700 transition-all">
                <FacebookIcon fontSize="large" />
              </a>
              <a href="" target="_blank" className="text-orange-500 hover:text-orange-700  transition-all">
                <XIcon fontSize="large" />
              </a>
              <a href="" target="_blank" className="text-orange-500 hover:text-orange-700 transition-all">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="" target="_blank" className="text-orange-500 hover:text-orange-700 transition-all">
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div ref={formRef} className="md:w-1/2 mt-10 md:mt-0 sm:p-5 w-full">
          <h3 className="text-3xl font-bold text-orange-500 text-center">Contact Us</h3>
          <form className="mt-5 space-y-4">
            <div className="relative">
              <input type="email" name="email" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Email" />
            </div>
            <div className="relative">
              <input type="tel" name="phone" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Phone" />
            </div>
            <div className="relative">
              <textarea name="message" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-28" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-all">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default transition(Contact);

