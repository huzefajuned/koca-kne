import toast from "react-hot-toast";

const ContactForm = () => {
  /**
   * Conact form haldeSubmit
   */

  const haldeSubmit = (e) => {
    e.preventDefault();
    toast.success("haldeSubmit test!");
  };
  return (
    <form
      onSubmit={haldeSubmit}
      className="w-full md:w-1/2 max-w-lg space-y-4 bg-white rounded-xl shadow-xl  p-3"
    >
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-base md:text-lg" htmlFor="name">
          Name
        </label>
        <input
          className="border rounded-lg py-2 px-3 text-gray-700"
          type="text"
          id="name"
          placeholder="Your name"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-base md:text-lg" htmlFor="email">
          Email
        </label>
        <input
          className="border rounded-lg py-2 px-3 text-gray-700"
          type="email"
          id="email"
          placeholder="Your email"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-base md:text-lg" htmlFor="message">
          Message
        </label>
        <textarea
          className="border rounded-lg py-2 px-3 text-gray-700"
          id="message"
          placeholder="Your message"
          rows="5"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500  text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
