// pages/contact.tsx
import React from "react";
import LandingLayout from "~/pages/Landing/LandingLayout";

const ContactPage: React.FC = () => {
  return (
    <LandingLayout>
      <div className="bg-gradient-to-r from-blue-600 to-white px-8 py-20 text-center text-white md:px-32">
        <h1 className="mb-8 text-5xl">Contact Us</h1>
        <p className="text-xl">
          Have questions? We would love to hear from you
        </p>
      </div>
      <div className="px-8 py-20 md:px-32">
        <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="message"
              placeholder="Your message"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </LandingLayout>
  );
};

export default ContactPage;
