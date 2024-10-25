import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Yoga Enthusiast",
    content: "Aum Yoga has transformed my life. The instructors are amazing and the atmosphere is so peaceful.",
    image: "/sarah-johnson.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Fitness Trainer",
    content: "I've been to many yoga studios, but Aum Yoga stands out. Their classes are challenging yet accessible.",
    image: "/michael-chen.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Stress Management Coach",
    content: "The mindfulness techniques I've learned at Aum Yoga have been invaluable in my personal and professional life.",
    image: "/emily-rodriguez.jpg"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Corporate Executive",
    content: "Aum Yoga's corporate wellness program has significantly improved our team's productivity and morale.",
    image: "/david-thompson.jpg"
  },
  {
    id: 5,
    name: "Lisa Patel",
    role: "Yoga Instructor",
    content: "Teaching at Aum Yoga has been a dream. The community here is supportive and truly dedicated to growth.",
    image: "/lisa-patel.jpg"
  }
];

const TestimonialCard = ({ name, role, content, image }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 mx-4 my-8 w-80 flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />
    <h3 className="text-xl font-semibold text-[#745982] mb-2">{name}</h3>
    <p className="text-sm text-gray-600 mb-4">{role}</p>
    <p className="text-gray-800 text-center">{content}</p>
  </motion.div>
);

const Marquee = ({ children }) => (
  <div className="overflow-hidden whitespace-nowrap">
    <motion.div
      className="inline-block"
      animate={{ x: [0, -100 + "%"] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {children}
    </motion.div>
    <motion.div
      className="inline-block"
      animate={{ x: [100 + "%", 0] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {children}
    </motion.div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="bg-[#f9f7fc] min-h-screen py-20 px-4 " id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#745982] mb-4">What Our Students Say</h1>
        <p className="text-xl text-gray-600">Discover the transformative power of Aum Yoga through our community's experiences.</p>
      </motion.div>

      <Marquee>
        <div className="flex">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Marquee>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-semibold text-[#745982] mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-8">Experience the benefits of Aum Yoga for yourself. Start your journey today!</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#ffcc3f] text-[#745982] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#db2a59] hover:text-white transition duration-300"
        >
          Book a Class
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Testimonials;