import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/auth/authThunk";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff, FiUser, FiMail } from "react-icons/fi";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await dispatch(registerUser({ name, email, password }));

    setLoading(false);

    if (result.meta.requestStatus === "fulfilled") {
      toast.success("Account created successfully 🎉");
      setTimeout(() => navigate("/login"), 1500);
    } else {
      toast.error(result.payload || "Registration failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Create Account
        </h1>
        <p className="text-sm text-white/70 text-center mb-8">
          Register to continue
        </p>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full pl-10 rounded-lg bg-white/20 text-white px-4 py-3 focus:ring-2 focus:ring-white/70 outline-none"
            />
          </div>

          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 rounded-lg bg-white/20 text-white px-4 py-3 focus:ring-2 focus:ring-white/70 outline-none"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg bg-white/20 text-white px-4 py-3 pr-12 focus:ring-2 focus:ring-white/70 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="w-full py-3 bg-white text-indigo-600 font-semibold rounded-lg"
          >
            {loading ? "Creating account..." : "Register"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
