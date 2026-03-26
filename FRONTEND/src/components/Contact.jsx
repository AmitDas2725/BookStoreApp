import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form submitted:", data);
    // You can hook this up to an email service like EmailJS or your backend later!
    alert("Thank you for reaching out! We will get back to you soon.");
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-800 pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-700">
        
        {/* Left Column: Contact Information */}
        <div className="md:w-1/3 bg-slate-900 text-white p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight mb-6">Contact Information</h3>
            <p className="text-slate-300 mb-8">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-300">support@bookstore.com</span>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-300">123 Tech Avenue<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="md:w-2/3 p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Top Row: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 border rounded-xl outline-none bg-gray-50 dark:bg-slate-800 dark:text-white transition-all duration-200
                    ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-200 dark:border-gray-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"}
                  `}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 border rounded-xl outline-none bg-gray-50 dark:bg-slate-800 dark:text-white transition-all duration-200
                    ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-200 dark:border-gray-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"}
                  `}
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" }
                  })}
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can we help you?"
                className={`w-full px-4 py-3 border rounded-xl outline-none bg-gray-50 dark:bg-slate-800 dark:text-white transition-all duration-200
                  ${errors.subject ? "border-red-500 focus:ring-red-500" : "border-gray-200 dark:border-gray-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"}
                `}
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && <span className="text-red-500 text-xs mt-1 block">{errors.subject.message}</span>}
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                className={`w-full px-4 py-3 border rounded-xl outline-none bg-gray-50 dark:bg-slate-800 dark:text-white transition-all duration-200 h-40 resize-none
                  ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-200 dark:border-gray-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"}
                `}
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg shadow-pink-500/30"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;