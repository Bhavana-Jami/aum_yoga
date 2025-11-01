import React from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Users, CalendarDays, Dumbbell, LogOut, UserCog } from "lucide-react";

const AdminProfile = () => {
  const { authState, handleSignOut } = useAuth();
  const navigate = useNavigate();

  const admin = authState.currentUser;

  // Example mock stats (replace with real data from Firebase/DB)
  const stats = {
    totalUsers: 128,
    totalBookings: 342,
    activePlans: 56,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-8">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          {admin?.photoURL ? (
            <img
              src={admin.photoURL}
              alt="Admin Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-[#ffcc3f] shadow-md"
            />
          ) : (
            <UserCog className="w-24 h-24 text-[#db2a59]" />
          )}
          <div>
            <h2 className="text-2xl font-bold text-[#ffcc3f]">
              {admin?.displayName || "Admin"}
            </h2>
            <p className="text-gray-300">{admin?.email}</p>
            <p className="text-sm text-[#db2a59]">Administrator</p>
          </div>
        </div>

        {/* Admin Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-black/40 rounded-xl p-4 text-center shadow-inner">
            <Users className="w-6 h-6 mx-auto text-[#ffcc3f]" />
            <h4 className="mt-2 text-lg font-bold">{stats.totalUsers}</h4>
            <p className="text-gray-400 text-sm">Total Users</p>
          </div>
          <div className="bg-black/40 rounded-xl p-4 text-center shadow-inner">
            <CalendarDays className="w-6 h-6 mx-auto text-[#ffcc3f]" />
            <h4 className="mt-2 text-lg font-bold">{stats.totalBookings}</h4>
            <p className="text-gray-400 text-sm">Total Bookings</p>
          </div>
          <div className="bg-black/40 rounded-xl p-4 text-center shadow-inner">
            <Dumbbell className="w-6 h-6 mx-auto text-[#ffcc3f]" />
            <h4 className="mt-2 text-lg font-bold">{stats.activePlans}</h4>
            <p className="text-gray-400 text-sm">Active Plans</p>
          </div>
        </div>

        {/* Management Links */}
        <div className="bg-black/40 rounded-xl p-4 shadow-inner space-y-3">
          <h3 className="text-lg font-semibold text-[#db2a59] mb-2">Admin Controls</h3>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => navigate("/manage-users")}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-left"
            >
              👥 Manage Users
            </button>
            <button
              onClick={() => navigate("/manage-bookings")}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-left"
            >
              📅 Manage Bookings
            </button>
            <button
              onClick={() => navigate("/manage-classes")}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-left"
            >
              🧘 Manage Classes
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end">
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

export default AdminProfile;
