import React, { useState } from "react";
import { motion } from "framer-motion";

const BookNowPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create order on backend
      const response = await fetch("https://razorpay-payment-intergration-service.onrender.com/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 500 }),
      });

      const order = await response.json();

      const options = {
        key: import.meta.env.RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Bluewonk",
        description: "Bluewonk Org",
        order_id: order.id,
        handler: async (response) => {
          console.log("hiyaaaa", response)
          const verifyPaymenetResponse = await fetch("https://razorpay-payment-intergration-service.onrender.com/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            }),
          });
          alert(verifyPaymenetResponse.json());
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      alert("Error creating order: " + err.message);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-[#f9f7fc] min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.h1
          className="text-4xl font-bold text-[#745982] mb-8 text-center"
          {...fadeIn}
        >
          Book Your Yoga Class
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#745982]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#745982]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#745982]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="class"
              className="block text-gray-700 font-semibold mb-2"
            >
              Class
            </label>
            <select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#745982]"
            >
              <option value="">Select a class</option>
              <option value="hatha">Hatha Yoga</option>
              <option value="vinyasa">Vinyasa Flow</option>
              <option value="yin">Yin Yoga</option>
              <option value="power">Power Yoga</option>
              <option value="restorative">Restorative Yoga</option>
              <option value="meditation">Meditation</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-700 font-semibold mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#745982]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Pick a Time Slot</label>
            <div className="flex gap-2">
              <label className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${formData.time === "06:00"
                ? "bg-[#745982] text-white"
                : "bg-[#f9f7fc] hover:bg-[#745982] hover:text-white"
                }`}>
                <input
                  type="radio"
                  name="time"
                  value="06:00"
                  checked={formData.time === "06:00"}
                  onChange={handleChange}
                  className="appearance-none hidden"
                />
                6:00 AM
              </label>
              <label className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${formData.time === "07:00"
                ? "bg-[#745982] text-white"
                : "bg-[#f9f7fc] hover:bg-[#745982] hover:text-white"
                }`}>
                <input
                  type="radio"
                  name="time"
                  value="07:00"
                  checked={formData.time === "07:00"}
                  onChange={handleChange}
                  className="appearance-none hidden"
                />
                7:00 AM
              </label>
              <label className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${formData.time === "18:00"
                ? "bg-[#745982] text-white"
                : "bg-[#f9f7fc] hover:bg-[#745982] hover:text-white"
                }`}>
                <input
                  type="radio"
                  name="time"
                  value="18:00"
                  checked={formData.time === "18:00"}
                  onChange={handleChange}
                  className="appearance-none hidden"
                />
                6:00 PM
              </label>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#ffcc3f] text-[#745982] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#db2a59] hover:text-white transition duration-300"
          >
            Book Now
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default BookNowPage;
