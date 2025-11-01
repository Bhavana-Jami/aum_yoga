import React from "react";
import { useAuth } from "../context/authContext"; // your auth context
import { useNavigate } from "react-router-dom";
import { LogOut, Calendar, UserCircle2 } from "lucide-react";

const Profile = () => {
  const { authState, handleSignOut } = useAuth();
  const navigate = useNavigate();

  const user = authState.currentUser;

  // Example mock booking data (replace with Firebase/DB data)
  const bookings = [
    { id: 1, date: "2025-09-20", slot: "Morning Yoga (7–8 AM)" },
    { id: 2, date: "2025-09-22", slot: "Evening Flow (6–7 PM)" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex justify-center px-4 py-12">
      <div className="max-w-lg w-full bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-8">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-[#ffcc3f] shadow-md"
            />
          ) : (
            <UserCircle2 className="w-24 h-24 text-[#db2a59]" />
          )}
          <div>
            <h2 className="text-2xl font-bold text-[#ffcc3f]">{user?.displayName || "Yoga Member"}</h2>
            <p className="text-gray-300">{user?.email}</p>
          </div>
        </div>

        {/* Membership Info */}
        <div className="bg-black/40 rounded-xl p-4 shadow-inner">
          <h3 className="text-lg font-semibold text-[#db2a59] mb-2">Membership Plan</h3>
          <p className="text-gray-200">Active: <span className="font-bold text-[#ffcc3f]">1-Month Plan</span></p>
          <p className="text-gray-400 text-sm">Expires on: Oct 17, 2025</p>
        </div>

        {/* Bookings */}
        <div className="bg-black/40 rounded-xl p-4 shadow-inner">
          <h3 className="text-lg font-semibold text-[#db2a59] mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5" /> Your Bookings
          </h3>
          <ul className="space-y-2">
            {bookings.length > 0 ? (
              bookings.map((b) => (
                <li
                  key={b.id}
                  className="p-3 rounded-lg bg-gray-700/40 flex justify-between items-center hover:bg-gray-600/50 transition"
                >
                  <span>{b.date}</span>
                  <span className="text-sm text-[#ffcc3f]">{b.slot}</span>
                </li>
              ))
            ) : (
              <p className="text-gray-400 text-sm">No bookings yet.</p>
            )}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex justify-between">
          <button
            onClick={() => navigate("/edit-profile")}
            className="px-4 py-2 rounded-lg bg-[#ffcc3f] text-black font-medium shadow-md hover:scale-105 transition"
          >
            Edit Profile
          </button>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#db2a59] text-white font-medium shadow-md hover:scale-105 transition"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
