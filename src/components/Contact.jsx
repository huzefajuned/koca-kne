import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-5 space-y-8 md:space-y-0 md:space-x-8 md:p-10">
      <div className="flex flex-col items-center md:w-1/2 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold">Contact Us</h1>
        <p className="text-base md:text-lg text-gray-700">
          Address: 1234 Main St, Kishanganj, India
        </p>
        <div className="w-full">
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.947290087675!2d88.04700011522755!3d26.10248558348848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4e4b9bdae4af7%3A0x1d4f5e7d0c0e8e2a!2sKishanganj%2C%20Bihar%20855307%2C%20India!5e0!3m2!1sen!2sus!4v1628573589721!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}

      <ContactForm />
    </div>
  );
};

export default Contact;
