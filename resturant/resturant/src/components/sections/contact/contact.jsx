import React from 'react';
import Heading from '../../heading/heading';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 max-w-[90%]">
      {/* Heading Section */}
      <div className="heading text-center">
        <Heading title="Contact " spanElement="Us" />
      </div>

      {/* Main Grid Section for Map and Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Google Maps Embed */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d231488.43647722836!2d66.96939755251742!3d24.96588259873185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3390d7dedff41%3A0x38175210b78c7fdd!2sKashmir%20Foods!5e0!3m2!1sen!2s!4v1726247436873!5m2!1sen!2s"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center pt-20">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <form className="space-y-6">
              {/* First Name */}
              <div className="w-full">
                <label
                  className="block text-sm font-medium text-white"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="block w-full mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
                  type="text"
                  id="first_name"
                  placeholder="First Name"
                />
              </div>
              {/* Email */}
              <div className="w-full">
                <label
                  className="block text-sm font-medium text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="block w-full mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
                  type="email"
                  id="email"
                  placeholder="Email"
                />
              </div>

              {/* Phone Number */}
              <div className="w-full">
                <label
                  className="block text-sm font-medium text-white"
                  htmlFor="phone_number"
                >
                  Phone Number
                </label>
                <input
                  className="block w-full mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
                  type="tel"
                  id="phone_number"
                  placeholder="Phone Number"
                />
              </div>


              {/* Send Button */}
              <button
                type="button"
                className="mt-4 rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Cntact Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
