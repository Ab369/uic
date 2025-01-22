import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import events from "../data/upcoming";


const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const detailVariants = {
  hidden: { opacity: 0, transform: "rotateX(-90deg)", transformOrigin: "top" },
  visible: {
    opacity: 1,
    transform: "rotateX(0deg)",
    transformOrigin: "top",
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transform: "rotateX(-90deg)",
    transformOrigin: "top",
    transition: { duration: 0.8, ease: "easeIn" },
  },
};

const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleEvent = (id) => {
    setSelectedEvent(selectedEvent === id ? null : id);
  };

  return (
    <div className="bg-black text-white p-8 rounded-lg max-w-8xl lg:mx-14">
      <h2 className="md:text-4xl text-3xl font-bold text-orange-400 text-center mb-6">
        Upcoming Events
      </h2>
      <div className="space-y-6">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="bg-black border-2 border-orange-400 rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Event Header */}
            <div
              className="p-6 flex justify-between items-center cursor-pointer hover:bg-black transition"
              onClick={() => toggleEvent(event.id)}
            >
              <div>
                <h3 className="text-2xl font-bold">{event.title}</h3>
                <p className="text-gray-400">{event.date}</p>
              </div>
              <motion.div
                className={`transform ${
                  selectedEvent === event.id ? "rotate-180" : "rotate-0"
                }`}
                transition={{ duration: 0.4 }}
              >
                ▼
              </motion.div>
            </div>

            {/* Event Details */}
            <AnimatePresence>
              {selectedEvent === event.id && (
                <motion.div
                  className="p-6 bg-black"
                  variants={detailVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p className="text-gray-300 text-lg mb-4">{event.details}</p>
                  <button className="px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
                    Register Now
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
