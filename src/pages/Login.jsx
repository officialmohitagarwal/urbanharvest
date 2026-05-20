import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  // DEMO ACCOUNT
  const fillDemoCredentials = () => {
    setEmail("admin@urbanharvest.com");
    setPassword("admin123");

    setErrors({});
  };

  // LOGIN
  const handleLogin = () => {

    let newErrors = {};

    // EMAIL VALIDATION
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email =
        "Enter a valid email address";
    }

    // PASSWORD VALIDATION
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // STOP IF ERRORS EXIST
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // REDUX LOGIN
    dispatch(
      login({
        name: "Admin",
        email,
      })
    );

    // NAVIGATE
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl"
      >

        {/* HEADER */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            Urban Harvest
          </h1>

          <p className="text-slate-400 mt-3">
            Welcome back 👋
          </p>

        </div>

        {/* FORM */}
        <div className="space-y-5">

          {/* EMAIL */}
          <div>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {

                setEmail(e.target.value);

                if (errors.email) {
                  setErrors((prev) => ({
                    ...prev,
                    email: "",
                  }));
                }
              }}
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 outline-none transition-all
              ${
                errors.email
                  ? "border-red-500"
                  : "border-white/10"
              }`}
            />

            {errors.email && (
              <p className="text-red-400 text-sm mt-2">
                {errors.email}
              </p>
            )}

          </div>

          {/* PASSWORD */}
          <div>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {

                setPassword(e.target.value);

                if (errors.password) {
                  setErrors((prev) => ({
                    ...prev,
                    password: "",
                  }));
                }
              }}
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 outline-none transition-all
              ${
                errors.password
                  ? "border-red-500"
                  : "border-white/10"
              }`}
            />

            {errors.password && (
              <p className="text-red-400 text-sm mt-2">
                {errors.password}
              </p>
            )}

          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-slate-300">
              <input type="checkbox" />
              Remember Me
            </label>

            <button className="text-green-400 hover:text-green-300 transition">
              Forgot Password?
            </button>

          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full bg-green-500 hover:bg-green-400 transition-all rounded-xl py-3 font-semibold"
          >
            Login
          </button>

          {/* DEMO CARD */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">

            <p className="text-sm font-medium text-slate-300 mb-3">
              Demo Credentials
            </p>

            <div className="space-y-2 text-sm">

              <p className="text-slate-400">
                Email:
                <span className="text-white ml-2">
                  admin@urbanharvest.com
                </span>
              </p>

              <p className="text-slate-400">
                Password:
                <span className="text-white ml-2">
                  admin123
                </span>
              </p>

            </div>

            {/* DEMO BUTTON */}
            <button
              onClick={fillDemoCredentials}
              className="mt-4 text-green-400 hover:text-green-300 text-sm transition hover:underline"
            >
              Use Demo Account
            </button>

          </div>

        </div>

      </motion.div>

    </div>
  );
};

export default Login;