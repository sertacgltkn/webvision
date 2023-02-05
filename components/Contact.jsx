import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen bg-gray-50 ">
      <h1 className="text-2xl font-bold text-center p-4 bg-gradient-to-l from-slate-900 bg-white text-white">
        Let' work together
      </h1>
      <form className="max-w-[600px] m-auto p-5 ">
        <div className="grid grid-cols-2 gap-2 ">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2 bg-gradient-to-r from-slate-900 text-white rounded-md hover:bg-slate-900 delay-100 uppercase">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
