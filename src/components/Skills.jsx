import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJs } from "react-icons/fa";
import { FaH } from "react-icons/fa6";
import { SiFirebase, SiGithub, SiJavascript, SiMysql, SiTailwindcss } from "react-icons/si";
import { SiDotnet } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="bg-purple500 py-16 px-4 z-10">
      <div className="max-w-3xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <div className="grid grid-cols-3 gap-4 md:px-4">
          <p className="bg-purple200 text-center px-2 py-2 rounded-md text-black font-bold text-medium">
            <SiDotnet className="text-xl" />
            <span>C#, ASP.NET</span>
          </p>
          <p className="bg-teal-400 text-center px-2 py-2 rounded-md text-black font-bold text-medium">
            <FaReact className="text-xl" />
            <span>ReactJS</span>
          </p>
          <p className="bg-orange-500 text-center px-2 py-2 rounded-md text-black font-bold text-medium">
            <FaHtml5 className="text-xl" />
            <span>HTML</span>
          </p>
          <p className="bg-blue-600 text-center px-2 py-2 rounded-md text-black font-bold text-medium">
            <FaCss3Alt className="text-xl" />
            <span>CSS</span>
          </p>
          <p className="bg-yellow-400 text-center px-2 py-2 rounded-md text-black font-bold text-medium">
            <FaJs className="text-xl" />
            <span>Javascript</span>
          </p>
          <p className="bg-blue-400 text-center px-2 py-2 rounded-md text-black font-bold text-medium">
            <SiTailwindcss className="text-xl" />
            <span>Tailwind</span>
          </p>
          <p className="bg-yellow-500 text-center px-2 py-2 rounded-md text-black font-bold text-medium">
            <SiFirebase className="text-xl" />
            <span>Firebase</span> 
          </p>
          <p className="bg-yellow-500 text-center px-2 py-2 rounded-md text-black font-bold text-medium">
            <SiMysql className="text-xl" />
            <span>My SQL</span> 
          </p>
          <p className="bg-purple300 text-center px-2 py-2 rounded-md text-white font-bold text-medium">
            <SiGithub className="text-xl" />
            <span>Git, GitHub</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
