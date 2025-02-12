import React from "react";
import { motion } from "framer-motion";
import Card from "../components/card";

import a from "../Images/Members/2025/Shreyansh_Pandey.jpg";
import b from "../Images/Members/2025/Aaditya_Narayan_Pandey.jpg";
import c from "../Images/Members/2025/Abhinav_Ojha.jpg";
import d from "../Images/Members/2025/Amit_Yadav.jpg";
import e from "../Images/Members/2025/Kumar_Saurabh.jpg";
import f from "../Images/Members/2025/Vikas_Kumar.jpg";
import g from "../Images/Members/2025/Sumit.jpeg";
import h from "../Images/Members/2025/Shiv.jpeg";
import i from "../Images/Members/2025/Nikhil_2025.jpg";
import j from "../Images/Members/2025/Anshu.jpeg";
import k from "../Images/Members/2025/Shivangi.jpg";

const membersData = [
  { img: a, name: "Shreyansh Pandey", post: "President" },
  { img: b, name: "Aaditya Narayan Pandey", post: "President" },
  { img: c, name: "Abhinav Ojha", post: "Vice President" },
  { img: i, name: "Nikhil Singh", post: "Treasurer" },
  { img: g, name: "Sumit Gupta", post: "Secretary" },
  { img: h, name: "Shiv Narayan", post: "Event Head" },
  { img: e, name: "Kumar Saurabh", post: "Event Head" },
  { img: d, name: "Amit Yadav", post: "Media & Publicity Head" },
  { img: f, name: "Vikas Kumar", post: "Media & Publicity Head" },
  { img: j, name: "Anshu", post: "Mentor" },
  { img: k, name: "Shivangi Sharma", post: "Mentor" },
];

const Final = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-8  py-12">
      <motion.div
        className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {membersData.map((member, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <Card imgSrc={member.img} name={member.name} post={member.post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Final;