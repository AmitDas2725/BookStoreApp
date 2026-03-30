import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = { email: data.email, password: data.password };
    
    await axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        if (res.data && res.data.user) {
          const loggedInUser = res.data.user;

          // 1. Get existing accounts or start with an empty array
          const existingAccounts = JSON.parse(localStorage.getItem("AllAccounts")) || [];

          // 2. Check if this email is already in the list
          const accountExists = existingAccounts.find(acc => acc.email === loggedInUser.email);

          if (!accountExists) {
            existingAccounts.push(loggedInUser);
            localStorage.setItem("AllAccounts", JSON.stringify(existingAccounts));
          }

          // 3. Set this specific user as the current Active User
          localStorage.setItem("Users", JSON.stringify(loggedInUser));

          toast.success("Logged in Successfully");
          closeModal();
          
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  const closeModal = () => {
    const modal = document.getElementById("login_modal");
    if (modal) modal.close();
    reset();
  };

  const goToSignup = () => {
    closeModal();
    navigate("/signup");
  };

  return (
    <dialog id="login_modal" className="modal bg-transparent">
      <div className="modal-box dark:bg-slate-900 dark:text-white shadow-xl relative max-w-sm w-full rounded-2xl p-8">
        
        <button
          type="button"
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          ✕
        </button>

        <h3 className="font-bold text-2xl mb-6 text-gray-900 dark:text-white">Login</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-lg outline-none bg-transparent dark:text-white transition-colors ${errors.email ? "border-red-500" : "border-gray-300 focus:border-pink-500"}`}
              {...register("email", { required: "Email is required" })}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border rounded-lg outline-none bg-transparent dark:text-white transition-colors ${errors.password ? "border-red-500" : "border-gray-300 focus:border-pink-500"}`}
              {...register("password", { required: "Password is required" })}
            />
          </div>

          <div className="flex justify-between items-center pt-2">
            <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg px-6 py-2 transition-colors">
              Login
            </button>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              New Account?{" "}
              <button type="button" onClick={goToSignup} className="text-blue-600 font-semibold hover:underline cursor-pointer bg-transparent border-none p-0">
                Signup
              </button>
            </p>
          </div>
        </form>
      </div>
      <div className="modal-backdrop" onClick={closeModal} />
    </dialog>
  );
}

export default Login;