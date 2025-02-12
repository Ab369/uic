import React from "react";
import { motion } from "framer-motion";
import Card from "../components/card";

import a from "../Images/Members/2026/Aaradhaya_Singh.jpeg";
import b from "../Images/Members/2026/Avinash_Mishra.jpg";
import c from "../Images/Members/2026/Anubhav_Singh.jpg";
import d from "../Images/Members/2026/Anushka_Tripathi.jpeg";
import e from "../Images/Members/2026/Akanksha.jpg";
import f from "../Images/Members/2026/Anjali.jpeg";
import g from "../Images/Members/2026/Yuvraj_Singh.jpg";
import h from "../Images/Members/2026/Animesh_Kumar_Goyal.jpg";
import i from "../Images/Members/2026/Aqsa_Siddiqui.jpg";
import j from "../Images/Members/2026/Ayush_Kannojia.jpg";
import k from "../Images/Members/2026/Priya_Singh.jpg";
import l from "../Images/Members/2026/Ananya_Shukla.jpeg";
import m from "../Images/Members/2026/Abhimanyu.jpg";
import n from "../Images/Members/2026/Mansi_Upadhyay.jpg";
import o from "../Images/Members/2026/Reetika_Verma.jpg";
import p from "../Images/Members/2026/Abhyodaya_Singh.jpg";
import q from "../Images/Members/2026/Piyush_Tyagi.jpg";
import r from "../Images/Members/2026/Ayush_Upadhyay.jpg";
import s from "../Images/Members/2026/Khushi_Arya.jpg";
import t from "../Images/Members/2026/Vidit_yadav.jpg";
import u from "../Images/Members/2026/Shaurya_Srivastav.jpg";
import v from "../Images/Members/2026/Aniket.jpeg";
import w from "../Images/Members/2026/Aman.jpeg";

const membersData = [
  { img: a, name: "Aaradhaya Singh", post: "Editorial & Content Lead" },
  { img: b, name: "Avinash Mishra", post: "Editorial & Content Lead" },
  { img: c, name: "Anubhav Singh", post: "Editorial & Content Lead" },
  { img: d, name: "Anushka Tripathi", post: "Editorial & Content Lead" },
  { img: v, name: "Aniket Shukla", post: "Event and Outreach Lead" },
  { img: e, name: "Akanksha", post: "Event and Outreach Lead" },
  { img: f, name: "Anjali Shekhar", post: "Event and Outreach Lead" },
  { img: g, name: "Yuvraj Singh", post: "Event and Outreach Lead" },
  { img: h, name: "Animesh Kumar Goyal", post: "Managerial Lead" },
  { img: i, name: "Aqsa Siddiqui", post: "Managerial Lead" },
  { img: j, name: "Ayush Kannojia", post: "Managerial Lead" },
  { img: k, name: "Priya Singh", post: "Managerial Lead" },
  { img: w, name: "Aman Patel", post: "Promotional & Social Media Lead" },
  { img: l, name: "Ananya Shukla", post: "Promotional & Social Media Lead" },
  { img: m, name: "Abhimanyu Singh", post: "Promotional & Social Media Lead" },
  { img: n, name: "Mansi Upadhyay", post: "Innovative Arts Lead" },
  { img: o, name: "Reetika Verma", post: "Innovative Arts Lead" },
  { img: p, name: "Abhyodaya Pratap Singh", post: "Video & Technical Lead" },
  { img: q, name: "Piyush Tyagi", post: "Video & Technical Lead" },
  { img: r, name: "Ayush Upadhyay", post: "Video & Technical Lead" },
  { img: s, name: "Khushi Arya", post: "Designing Lead" },
  { img: t, name: "Vidit Yaduvancy", post: "Designing Lead" },
  { img: u, name: "Shaurya Srivastava", post: "Designing Lead" },
];

const Third = () => {
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

export default Third;