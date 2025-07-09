import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const FooterWithMessage = () => {
  emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;

    emailjs.send(serviceID, templateID, formData).then(
      () => {
        setStatus("Message sent! Thank you.");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        setStatus("Failed to send message, please try again.");
        console.error("EmailJS error:", error);
      }
    );
  };

  return (
    <footer id="contact" className="bg-black text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-orange-400">
            Follow Me
          </h3>
          <p className="text-gray-400 mb-6 max-w-sm">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
          <div className="flex gap-6 mt-6 text-4xl">
            <a href="https://github.com/prabhakaranskt" target="_blank">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/prabhakaranskt" target="_blank">
              <FaLinkedin />
            </a>
            <a href="mailto:prabhaece104@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/__.prabha_?utm_source=qr&igsh=MXFkMncwanQ0Zzg3Ng==">
              <FaInstagram />
            </a>
            <a href="https://x.com/sktPrabha7?t=NmmZjAdKWrcR6rSxiZd-BQ&s=08">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-2 bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur-md">
          <h3 className="text-2xl font-semibold mb-6 text-orange-400">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-black/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-3 rounded-md bg-black/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              required
              className="p-3 rounded-md bg-black/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            ></textarea>
            <button
              type="submit"
              className="self-start bg-orange-400 hover:bg-orange-600 cursor-pointer transition text-black font-semibold py-2 px-6 rounded-md"
            >
              Send
            </button>
          </form>
          {status && <p className="mt-4 text-green-400">{status}</p>}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Prabha Karan. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterWithMessage;
