import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function ContactSection() {
  return (
    <section className="bg-gray-100 pt-16 mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 font-outfit">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-8 font-inter px-10 lg:px-60">
          I'm always open to any questions or queries! Whether you want to work on a project together, talk about
          why chocolate is 100% better than vanilla, or just say hi!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:pranavkonjeti@gmail.com"
            className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-inter flex items-center gap-2 transition transform hover:scale-110"
          >
            <FaEnvelope />
            Email
          </a>
          <a
            href="https://github.com/pkthecoda"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-md text-lg font-inter flex items-center gap-2 transition transform hover:scale-110"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-konjeti"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white px-6 py-3 rounded-md text-lg font-inter flex items-center gap-2 transition transform hover:scale-110"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>

      <footer className="bg-gray-200 mt-16 py-8 text-center">
        <p className="text-gray-600 font-inter">
          Built with ❤️ by <a href="mailto:pranavkonjeti@gmail.com" target="_blank" className="text-blue-500 underline">Pranav Konjeti</a> using <span className="text-orange-700">React, Tailwind, Material Tailwind</span> <br />
          This portfolio is a complete rehaul of my <a href="https://pranavkold.vercel.app" target="_blank" className="text-blue-500 underline">old one</a>. Advice is greatly appreciated!
          

        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://github.com/pkthecoda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-600 text-2xl hover:text-gray-800" />
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-konjeti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-600 text-2xl hover:text-gray-800" />
          </a>
          <a
            href="mailto:pranavkonjeti@gmail.com"
          >
            <FaEnvelope className="text-gray-600 text-2xl hover:text-gray-800" />
          </a>
        </div>
      </footer>
    </section>
  );
}

export default ContactSection;
