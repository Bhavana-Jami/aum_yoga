import React from 'react';
// import flexibility from '../assets/flexibility.jpg';
// import strength from '../assets/strength.jpg';
// import weightLoss from '../assets/weight-loss.jpg';

const goals = [
  {
    title: 'Increase Flexibility',
    description: 'Yoga increases your flexibility, agility, and overall range of motion. In a 10-week study on male college athletes, researchers found...',
    // image: flexibility,
  },
  {
    title: 'Strengthen and Tone',
    description: 'Yoga sculpts your body by not only lengthening your muscles, but strengthening them as well.',
    // image: strength,
  },
  {
    title: 'Aid In Weight Loss',
    description: 'When people think of weight loss, yoga is not typically the first exercise that comes to mind. However, there are certain styles of yoga...',
    // image: weightLoss,
  },
];

function FitnessGoals() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#f9f7fc]">
      <h2 className="text-4xl font-bold text-center mb-4">Our Fitness Goals</h2>
      <p className="text-center mb-12 max-w-3xl mx-auto">
        Yoga sculpts your body by not only lengthening your muscles, but strengthening them as well. Yoga fitness comes in the effective form of bodyweight conditioning (holding Plank Pose for example), which can be just as effective as lifting weights - if you practice the right poses.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {goals.map((goal, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={goal.image} alt={goal.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
              <p className="text-[#707070]">{goal.description}</p>
              <button className="mt-4 text-[#745982] font-semibold hover:text-[#db2a59]">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FitnessGoals;
