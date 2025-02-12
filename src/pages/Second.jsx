import React from "react";
import { motion } from "framer-motion";
import Card from "../components/card";

import a from "../Images/Members/2027/Akhilendra_Singh.jpg";
import b from "../Images/Members/2027/Anjali_Sharma.jpg";
import c from "../Images/Members/2027/Ankit_Patwa.jpg";
import d from "../Images/Members/2027/Anurag_Singh.jpg";
import e from "../Images/Members/2027/Anushka_Singh.jpg";
import f from "../Images/Members/2027/Aradhana_Mishra.jpg";
import g from "../Images/Members/2027/Arpita_Verma.jpg";
import h from "../Images/Members/2027/Ashutosh_Maurya.jpg";
import i from "../Images/Members/2027/Bhumi_Bhatnagar.jpg";
import j from "../Images/Members/2027/Devesh_Mishra.jpeg";
import k from "../Images/Members/2027/DEVESH_SHARMA.jpg";
import l from "../Images/Members/2027/Diksha_Kushawaha.jpg";
import m from "../Images/Members/2027/Divya_Dubey.jpg";
import n from "../Images/Members/2027/Khushi_Gupta.jpg";
import o from "../Images/Members/2027/Kishan_Chaubey.jpg";
import p from "../Images/Members/2027/Madulika_Rao.jpg";
import q from "../Images/Members/2027/Nidhi_Singh.jpg";
import r from "../Images/Members/2027/Nilesh_Kumar.jpg";
import s from "../Images/Members/2027/Prachi_Yadav.jpg";
import t from "../Images/Members/2027/Pranjali.jpg";
import u from "../Images/Members/2027/Priyanshu_Chauhan.jpg";
import v from "../Images/Members/2027/Riddhi_Agarwal.jpg";
import w from "../Images/Members/2027/Ritu_Agarwal.jpg";
import x from "../Images/Members/2027/Shashank_Bhardwaj.jpg";
import y from "../Images/Members/2027/Shashank_Kumar.jpg";
import z from "../Images/Members/2027/Shraddha_Singh.jpg";
import aa from "../Images/Members/2027/Shrestha_Gupta.jpg";
import ab from "../Images/Members/2027/Shubham_Rai.jpg";
import ac from "../Images/Members/2027/Tejas_Vishwakarma.jpg";
import ad from "../Images/Members/2027/Vivek_Yadav.jpeg";

const membersData = [
  { img: a, name: "Akhilendra Singh", post: "Executive Member" },
  { img: b, name: "Anjali Sharma", post: "Executive Member" },
  { img: c, name: "Ankit Patwa", post: "Executive Member" },
  { img: d, name: "Anurag Singh", post: "Executive Member" },
  { img: e, name: "Anushka Singh", post: "Executive Member" },
  { img: f, name: "Aradhana Mishra", post: "Executive Member" },
  { img: g, name: "Arpita Verma", post: "Executive Member" },
  { img: h, name: "Ashutosh Maurya", post: "Executive Member" },
  { img: i, name: "Bhumi Bhatnagar", post: "Executive Member" },
  { img: j, name: "Devesh Mishra", post: "Executive Member" },
  { img: k, name: "Devesh Sharma", post: "Executive Member" },
  { img: l, name: "Diksha Kushawaha", post: "Executive Member" },
  { img: m, name: "Divya Dubey", post: "Executive Member" },
  { img: n, name: "Khushi Gupta", post: "Executive Member" },
  { img: o, name: "Kishan Chaubey", post: "Executive Member" },
  { img: p, name: "Madhulika Rao", post: "Executive Member" },
  { img: q, name: "Nidhi Singh", post: "Executive Member" },
  { img: r, name: "Nilesh Kumar", post: "Executive Member" },
  { img: s, name: "Prachi Yadav", post: "Executive Member" },
  { img: t, name: "Pranjali", post: "Executive Member" },
  { img: u, name: "Priyanshu Chauhan", post: "Executive Member" },
  { img: v, name: "Riddhi Agarwal", post: "Executive Member" },
  { img: w, name: "Ritu Agarwal", post: "Executive Member" },
  { img: x, name: "Shashank Bhardwaj", post: "Executive Member" },
  { img: y, name: "Shashank Kumar", post: "Executive Member" },
  { img: z, name: "Shraddha Singh", post: "Executive Member" },
  { img: aa, name: "Shrestha Gupta", post: "Executive Member" },
  { img: ab, name: "Shubham Rai", post: "Executive Member" },
  { img: ac, name: "Tejas Vishwakarma", post: "Executive Member" },
  { img: ad, name: "Vivek Yadav", post: "Executive Member" },
];

const Second = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-8 py-12">
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

export default Second;