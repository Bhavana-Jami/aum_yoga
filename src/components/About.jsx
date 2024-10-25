import React from 'react';
// import aboutUsImage from '../assets/about-us-image.jpg';
import meditate from '../assets/meditate.jpg';
function About() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#f9f7fc]" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={meditate}
              alt="Yoga instructor teaching a class"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-6 text-[#707070] text-center md:text-left">
              At Yoga Soul, we believe in the transformative power of yoga to nurture both body and mind. Our studio is a sanctuary where individuals of all levels can explore the ancient practice of yoga in a modern, welcoming environment.
            </p>
            {/* <p className="text-lg mb-6 text-[#707070]">
              Founded in 2010, Yoga Soul has grown from a small community studio to a beloved institution, offering a wide range of classes, workshops, and teacher training programs. Our experienced instructors are passionate about guiding you on your yoga journey, whether you're a beginner or an advanced practitioner.
            </p>
            <p className="text-lg mb-6 text-[#707070]">
              We're committed to creating a supportive, inclusive community where everyone feels welcome and inspired to grow. Join us and discover the profound benefits of yoga for yourself.
            </p> */}
            <button className="bg-[#745982] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#db2a59] transition duration-300 mx-auto block sm:inline-block">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
