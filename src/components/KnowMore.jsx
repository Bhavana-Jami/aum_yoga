import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const services = [
  {
    id: 'hatha',
    name: 'Hatha Yoga',
    description: 'Hatha yoga is a gentle introduction to the most basic yoga postures. You will learn how to breathe properly and practice fundamental poses that improve flexibility, strength, and balance.',
    benefits: ['Improves flexibility', 'Builds strength', 'Reduces stress', 'Enhances balance'],
    suitableFor: 'Beginners and those looking for a gentle practice',
    duration: '60-90 minutes',
    image: '/hatha-yoga.jpg'
  },
  {
    id: 'vinyasa',
    name: 'Vinyasa Flow',
    description: 'Vinyasa yoga is a dynamic practice that links movement and breath to attain balance in the mind and body. From the Sanskrit "to place in a special way," vinyasa aligns a deliberate sequence of poses with the breath to achieve a continuous flow.',
    benefits: ['Increases endurance', 'Improves flexibility', 'Builds lean muscle', 'Calms the mind'],
    suitableFor: 'Intermediate to advanced practitioners',
    duration: '60-75 minutes',
    image: '/vinyasa-flow.jpg'
  },
  {
    id: 'yin',
    name: 'Yin Yoga',
    description: 'Yin Yoga is a slow-paced style of yoga with postures, or asanas, that are held for longer periods of time. It targets your deep connective tissues, like your fascia, ligaments, joints, and bones.',
    benefits: ['Increases flexibility', 'Improves joint mobility', 'Reduces stress and anxiety', 'Balances the mind and body'],
    suitableFor: 'All levels, especially those looking to reduce stress',
    duration: '75-90 minutes',
    image: '/yin-yoga.jpg'
  },
  {
    id: 'power',
    name: 'Power Yoga',
    description: 'Power Yoga is a fitness-based vinyasa practice. An offshoot of Ashtanga Yoga, it has many of the same qualities and benefits, including building internal heat, increased stamina, strength, and flexibility, as well as stress reduction.',
    benefits: ['Builds strength', 'Increases flexibility', 'Improves cardiovascular health', 'Enhances mental focus'],
    suitableFor: 'Those looking for a more intense, fitness-focused practice',
    duration: '60-75 minutes',
    image: '/power-yoga.jpg'
  },
  {
    id: 'restorative',
    name: 'Restorative Yoga',
    description: 'Restorative yoga is a passive, meditative form of yoga that allows you to relax and release the body into a gentle stretch. Each restorative pose is held for several minutes and often includes props like bolsters, blankets, and blocks.',
    benefits: ['Deep relaxation', 'Stress reduction', 'Improved sleep', 'Better digestion'],
    suitableFor: 'All levels, especially those recovering from injury or illness',
    duration: '75-90 minutes',
    image: '/restorative-yoga.jpg'
  },
  {
    id: 'meditation',
    name: 'Meditation',
    description: 'Our meditation classes focus on cultivating mindfulness and awareness. Through guided sessions, you will learn various meditation techniques to calm the mind, reduce stress, and increase overall well-being.',
    benefits: ['Reduces stress and anxiety', 'Improves focus and concentration', 'Enhances emotional well-being', 'Promotes self-awareness'],
    suitableFor: 'All levels',
    duration: '30-45 minutes',
    image: '/meditation.jpg'
  }
];

const KnowMorePage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-[#f9f7fc] min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-[#745982] mb-8 text-center"
          {...fadeIn}
        >
          Our Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelectedService(service)}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-semibold text-[#745982] mb-2">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.description.substring(0, 100)}...</p>
              <button className="text-[#ffcc3f] hover:text-[#db2a59] font-semibold transition duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

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
                    <button className="bg-[#ffcc3f] text-[#745982] px-6 py-2 rounded-full hover:bg-[#db2a59] hover:text-white transition duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default KnowMorePage;