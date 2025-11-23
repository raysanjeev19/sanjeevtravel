import React from 'react';

const ContactForm = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="rounded-2xl bg-[linear-gradient(to_bottom,#eaf8ea,#d4f1d4)] text-center py-12 px-6">
          <h2 className="text-4xl font-semibold text-[#333333]">
            Dont Find Anything
          </h2>
          
          <p className="mt-2 text-base text-[#666666]">
            Let's connect with us
          </p>
          
          <form className="mt-8 max-w-3xl w-full mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your first message"
                className="w-full h-12 pl-4 pr-[132px] rounded-lg border-transparent-800 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 transition focus:outline-none focus:ring-2"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 h-9 -translate-y-1/2 rounded-lg bg-[#1a1a1a] px-8 text-[13px] font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-black"
              >
                START
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;