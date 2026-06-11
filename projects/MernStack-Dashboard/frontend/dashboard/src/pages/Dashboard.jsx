import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authThunk";
import { motion } from "framer-motion";
import {
  FiLogOut,
  FiUser,
  FiMail,
  FiShield,
  FiActivity,
} from "react-icons/fi";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">
          Dashboard
        </h1>

        <button
          onClick={() => dispatch(logoutUser())}
          className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition"
        >
          <FiLogOut />
          Logout
        </button>
      </header>

      {/* Content */}
      <main className="p-6">
        
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome back 👋
          </h2>
          <p className="text-gray-500 mt-1">
            Here’s an overview of your account
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Account Type</p>
                <h3 className="text-xl font-semibold text-gray-800">
                  Premium
                </h3>
              </div>
              <FiUser className="text-indigo-500 text-2xl" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Email Status</p>
                <h3 className="text-xl font-semibold text-gray-800">
                  Verified
                </h3>
              </div>
              <FiMail className="text-green-500 text-2xl" />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Security</p>
                <h3 className="text-xl font-semibold text-gray-800">
                  Strong
                </h3>
              </div>
              <FiShield className="text-purple-500 text-2xl" />
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Activity</p>
                <h3 className="text-xl font-semibold text-gray-800">
                  Active
                </h3>
              </div>
              <FiActivity className="text-orange-500 text-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Extra Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 bg-white rounded-xl shadow p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Account Summary
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            This dashboard gives you a quick overview of your account
            information, security status, and activity. In real projects,
            this section can include charts, recent logins, or transactions.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
