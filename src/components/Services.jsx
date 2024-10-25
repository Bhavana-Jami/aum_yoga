import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import meditate from "../assets/meditate.jpg";
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
const services = [
  {
    id: "hatha",
    name: "Hatha Yoga",
    description:
      "Hatha yoga is a gentle introduction to the most basic yoga postures. You will learn how to breathe properly and practice fundamental poses that improve flexibility, strength, and balance.",
    benefits: [
      "Improves flexibility",
      "Builds strength",
      "Reduces stress",
      "Enhances balance",
    ],
    suitableFor: "Beginners and those looking for a gentle practice",
    duration: "60-90 minutes",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
  },
  {
    id: "vinyasa",
    name: "Vinyasa Flow",
    description:
      'Vinyasa yoga is a dynamic practice that links movement and breath to attain balance in the mind and body. From the Sanskrit "to place in a special way," vinyasa aligns a deliberate sequence of poses with the breath to achieve a continuous flow.',
    benefits: [
      "Increases endurance",
      "Improves flexibility",
      "Builds lean muscle",
      "Calms the mind",
    ],
    suitableFor: "Intermediate to advanced practitioners",
    duration: "60-75 minutes",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
  },
  {
    id: "yin",
    name: "Yin Yoga",
    description:
      "Yin Yoga is a slow-paced style of yoga with postures, or asanas, that are held for longer periods of time. It targets your deep connective tissues, like your fascia, ligaments, joints, and bones.",
    benefits: [
      "Increases flexibility",
      "Improves joint mobility",
      "Reduces stress and anxiety",
      "Balances the mind and body",
    ],
    suitableFor: "All levels, especially those looking to reduce stress",
    duration: "75-90 minutes",
    image: "https://images.unsplash.com/photo-1552286450-4a669f880062",
  },
  {
    id: "power",
    name: "Power Yoga",
    description:
      "Power Yoga is a fitness-based vinyasa practice. An offshoot of Ashtanga Yoga, it has many of the same qualities and benefits, including building internal heat, increased stamina, strength, and flexibility, as well as stress reduction.",
    benefits: [
      "Builds strength",
      "Increases flexibility",
      "Improves cardiovascular health",
      "Enhances mental focus",
    ],
    suitableFor: "Those looking for a more intense, fitness-focused practice",
    duration: "60-75 minutes",
    image: "https://images.unsplash.com/photo-1517637382994-f02da38c6728",
  },
  {
    id: "restorative",
    name: "Restorative Yoga",
    description:
      "Restorative yoga is a passive, meditative form of yoga that allows you to relax and release the body into a gentle stretch. Each restorative pose is held for several minutes and often includes props like bolsters, blankets, and blocks.",
    benefits: [
      "Deep relaxation",
      "Stress reduction",
      "Improved sleep",
      "Better digestion",
    ],
    suitableFor:
      "All levels, especially those recovering from injury or illness",
    duration: "75-90 minutes",
    image: "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3",
  },
  {
    id: "meditation",
    name: "Meditation",
    description:
      "Our meditation classes focus on cultivating mindfulness and awareness. Through guided sessions, you will learn various meditation techniques to calm the mind, reduce stress, and increase overall well-being.",
    benefits: [
      "Reduces stress and anxiety",
      "Improves focus and concentration",
      "Enhances emotional well-being",
      "Promotes self-awareness",
    ],
    suitableFor: "All levels",
    duration: "30-45 minutes",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
  },
];

function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  };
  const handleBookNow = (service) => {
    navigate(`/book/${selectedService.id}`);
    
  }
  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-24 bg-[#f9f7fc]"
      id="services"
    >
      <div className="container mx-auto">
        <motion.h1
          className="text-4xl font-bold  mb-8 text-center"
          {...fadeIn}
        >
           <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        </motion.h1>


      </div>
    
      <p className="text-center mb-12 max-w-3xl mx-auto text-[#707070]">
        The benefits of a regular yoga practice are wide-ranging. Here are our
        three regular sessions of yoga. Our sessions are organized with both
        kids and senior.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-[#707070] mb-4">
                {service.description.slice(0, 100)}...
              </p>
              <div className="flex justify-start gap-4">
                <div className="bg-[#db2a59] text-white px-3 py-1 rounded-full text-sm cursor-pointer" onClick={() => setSelectedService(service)}>
                  Know More
                </div>
                <div
                  className="bg-[#db2a59] text-white px-3 py-1 rounded-full text-sm cursor-pointer"
                  onClick={() => navigate(`/book/${index}`)}
                >
                  Book Now
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* modal for selected service */}
      <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg p-8 max-w-4xl w-full relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-[#db2a59] transition duration-300"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <img src={selectedService.image} alt={selectedService.name} className="w-full h-64 object-cover rounded-md mb-4" />
                  </div>
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-[#745982] mb-4">{selectedService.name}</h2>
                    <p className="text-gray-700 mb-4">{selectedService.description}</p>
                    <h3 className="text-xl font-semibold text-[#745982] mb-2">Benefits:</h3>
                    <ul className="list-disc list-inside mb-4">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-700">{benefit}</li>
                      ))}
                    </ul>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Suitable for:</span> {selectedService.suitableFor}</p>
                    <p className="text-gray-700 mb-4"><span className="font-semibold">Duration:</span> {selectedService.duration}</p>
                    <button className="bg-[#ffcc3f] text-[#745982] px-6 py-2 rounded-full hover:bg-[#db2a59] hover:text-white transition duration-300" onClick={()=>handleBookNow(service)}>
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  );
}

export default Services;
