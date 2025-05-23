import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { FaHome, FaUser, FaGraduationCap, FaBriefcase, FaBook, FaEnvelope, FaArrowDown } from "react-icons/fa";
import RotatingText from "./Effect/RolatingText";
import GooeyNav from "./Effect/GooeyNav";

const Model = ({ rotation }) => {
  const gltf = useGLTF("/model.glb");
  return <primitive object={gltf.scene} scale={1.5} rotation={rotation} />;
};

const skills = [".Net Development", "UX Development", "React Development"];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_TIME = 1500;

const items = [
  { label: <FaHome className="text-purple-500 relative z-50" />, href: "#hero" },
  { label: <FaUser className="text-purple-500 relative z-50" />, href: "#about" },
  { label: <FaGraduationCap className="text-purple-500 relative z-50" />, href: "#education" },
  { label: <FaBriefcase className="text-purple-500 relative z-50" />, href: "#projects" },
  { label: <FaBook className="text-purple-500 relative z-50" />, href: "#skills" },
  { label: <FaEnvelope className="text-purple-500 relative z-50" />, href: "#contact" }
];

function Hero() {
  const [rotation, setRotation] = useState([0, 6, 0]);
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const x = (clientX / windowWidth) * 1 - 1;
      const y = -(clientY / windowHeight) * 2 + 1;

      const rotationY = x * 1.5;
      const rotationX = -y * 1;

      setRotation([rotationX, rotationY, 0]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const currentWord = skills[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, DELETING_SPEED);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }, TYPING_SPEED);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % skills.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-white px-4 z-[1]"
    >
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-purple200 relative inline-block">
              <span className="relative text-white bg-gradient-to-r from-[#240046] via-[#5a189a] to-[#c77dff] bg-clip-text text-transparent">
                Thinh
              </span>
            </span>
            👋
          </h1>

          <div className="flex justify-center items-center m-2">
            <h3 className="text-2xl font-bold text-white mr-2">Development</h3>
            <RotatingText
              texts={[".Net", "React", "UX"]}
              mainClassName="w-fit px-4 sm:px-2 md:px-3 bg-purple300 font-bold text-lg text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-md"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>

        <div className="hidden sm:block fixed top-0 left-0 md:w-1/6 lg:w-1/6 xl:w-1/5 md:h-[400px] lg:h-[400px] xl:h-[500px] pointer-events-none z-10">
          <p className="fixed md:w-1/6 lg:w-1/6 xl:w-1/5 top-20 text-xl font-extrabold bg-gradient-to-r from-[#240046] via-[#5a189a] to-[#c77dff] bg-clip-text text-transparent">
            Thịnh
          </p>
          <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
              <Model rotation={rotation} />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>

        <div className="flex justify-center">
          {window.innerWidth < 769 ? (
            <a
              href="/cv.pdf"
              download
              className="w-fit text-purple-300 border-2 border-purple-300 font-semibold px-6 py-2 rounded-lg hover:bg-purple-300 hover:shadow-xl hover:text-purple-700 hover:shadow-purple-300 transition"
            >
              Download CV
            </a>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="w-fit text-purple-300 border-2 border-purple-300 font-semibold px-6 py-2 rounded-lg hover:bg-purple-300 hover:shadow-xl hover:text-purple-700 hover:shadow-purple-300 transition"
            >
              Read my CV
            </button>
          )}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white w-[90%] md:w-[800px] h-[90%] relative rounded-lg overflow-hidden shadow-lg">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-3 text-xl text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
              <iframe
                src="/cv.pdf"
                title="My CV"
                className="w-full h-full"
              ></iframe>
              <a
                href="/cv.pdf"
                download
                className="absolute bottom-4 right-4 w-fit text-purple-700 border-2 border-purple-600 font-semibold px-6 py-2 rounded-lg transition"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={toggleNav}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        {isNavVisible ? <img className="w-16" src="/images/Hide.svg" alt="Hide" /> : <img className="w-16" src="/images/Show.svg" alt="Show" />}
      </button>

      <div
        className={`
          fixed top-1/2 right-4 transform -translate-y-1/2 z-40
          transition-all duration-500 ease-in-out
          ${isNavVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none"}
        `}
      >
        <div className="bg-purple-400 p-4 py-8 bg-opacity-25 shadow-md backdrop-blur-sm shadow-purple-500 rounded-full">
          <div style={{ height: '380px', position: 'relative' }}>
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-purple200 animate-bounce hover:scale-110 hover:text-purple100 transition drop-shadow-xl"
        >
          <FaArrowDown size={40} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
