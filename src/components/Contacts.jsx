import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-purple500 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">Feel free to reach out via email or connect with me on GitHub and LinkedIn!</p>
        <div className="flex justify-center items-center gap-4">
          <a
            href="mailto:trongthinh2602@example.com"
            className="flex items-center gap-2 text-yellow-500 hover:scale-110 hover:transition-transform"
          >
            <FaEnvelope className="text-2xl" />
          </a>
          <a
            href="https://github.com/TrThinh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple300 hover:scale-110 hover:transition-transform"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/th%E1%BB%8Bnh-%C4%91%E1%BB%97-31866b220/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:scale-110 hover:transition-transform"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;