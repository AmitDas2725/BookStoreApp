import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Login from "./Login"; 

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = { 
        fullname: data.fullname, 
        email: data.email, 
        password: data.password 
    };

    // Replace the URL with your environment variable or exact backend port
    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          
          // Store user info in localStorage (excluding password for security)
          // We use res.data.user because our backend controller returns { message, user: {...} }
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          
          // Redirect to home or profile after a slight delay for the toast
          setTimeout(() => {
            navigate("/", { replace: true });
            window.location.reload(); // Refresh to update Navbar state if needed
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          // Show the specific error message from the backend (e.g., "User already exists")
          toast.error("Error: " + err.response.data.message);
        } else {
          toast.error("Error: Could not connect to server");
        }
      });
  };

  const openLoginModal = () => {
    document.getElementById("login_modal").showModal();
  };

  return (
    <div className="w-full relative">
      <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="w-[85%] sm:w-[480px] border rounded-2xl shadow-2xl p-8 bg-white dark:bg-slate-900 dark:border-gray-700 relative">

          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-400">
            ✕
          </Link>

          <h3 className="font-bold text-2xl mb-6 text-gray-900 dark:text-white">Signup</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg outline-none bg-transparent dark:text-white transition-colors"
                {...register("fullname", { required: "Name is required" })}
              />
              {errors.fullname && <span className="text-red-500 text-xs">{errors.fullname.message}</span>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg outline-none bg-transparent dark:text-white transition-colors"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg outline-none bg-transparent dark:text-white transition-colors"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
            </div>

            <div className="flex justify-between items-center pt-2">
              <button type="submit" className="bg-pink-500 hover:bg-pink-600 transition-all text-white font-semibold rounded-lg px-6 py-2">
                Signup
              </button>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Have an account?{" "}
                <button type="button" onClick={openLoginModal} className="text-blue-600 font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
      
      <Login />
    </div>
  );
}

export default Signup;