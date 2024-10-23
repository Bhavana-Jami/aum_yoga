import React from 'react';
import meditate from '../assets/meditate.jpg';
const sessions = [
  {
    title: 'Yoga for Kids',
    description: 'Yoga can be a safe, effective, and fun way to introduce kids to regular exercise. And since many yoga poses have nature-themed names.',
    image: meditate,
    age: '6-12',
    days: '2-days',
    hours: '10-15',
    color: 'bg-[#db2a59]',
  },
  {
    title:'Yoga for Adults',
    description: 'Yoga is the most popular activity among 18 to 34-year olds and the second-most popular among 35 to 54-year-olds. Considering the busy schedules.',
    image: meditate,
    age: '18-34',
    days: '3-days',
    hours: '20-30',
    color: 'bg-[#ffcc3f]',
  },
  {
    title: 'Yoga for Seniors',
    description: 'Yoga classes catered to seniors can emphasize gentle, static and dynamic flexibility poses along with mindfulness techniques.',
    image: meditate,
    age: '35-65',
    days: '2-days',
    hours: '10-15',
    color: 'bg-[#745982]',
  },
];

function YogaSessions() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#f9f7fc]">
      <h2 className="text-4xl font-bold text-center mb-4">Our Yoga Session</h2>
      <p className="text-center mb-12 max-w-3xl mx-auto text-[#707070]">
        The benefits of a regular yoga practice are wide-ranging. Here are our three regular sessions of yoga. Our sessions are organized with both kids and senior.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sessions.map((session, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={session.image} alt={session.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
              <p className="text-[#707070] mb-4">{session.description}</p>
              <div className="flex justify-between">
                <div className={`${session.color} text-white px-3 py-1 rounded-full text-sm`}>
                  {session.age} Years
                </div>
                <div className={`${session.color} text-white px-3 py-1 rounded-full text-sm`}>
                  {session.days} Weekly
                </div>
                <div className={`${session.color} text-white px-3 py-1 rounded-full text-sm`}>
                  {session.hours} Minutes
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default YogaSessions;