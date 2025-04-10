import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { FaArrowUp, FaEnvelope } from "react-icons/fa";

const Model = ({ rotation }) => {
  const gltf = useGLTF("/model.glb");
  return <primitive object={gltf.scene} scale={1.5} rotation={rotation} />;
};

function Hero() {
  const [rotation, setRotation] = useState([0, 5, 0]);
  const [isAtContact, setIsAtContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contactSection = document.querySelector("#contact");
      const contactOffsetTop = contactSection.offsetTop;

      if (scrollY + window.innerHeight >= contactOffsetTop) {
        setIsAtContact(true);
      } else {
        setIsAtContact(false);
      }

      setRotation([0, scrollY * 0.003, 0]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    document.querySelector("#hero").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="bg-purple500 md:h-[500px] h-[290px] flex items-center justify-center text-center text-white px-4"
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-purple200 relative inline-block">
            <span className="relative text-white">Thinh</span>
          </span>
          👋
        </h1>
        <p className="text-lg md:text-2xl mb-10">
          Final-year IT student & .NET enthusiast
        </p>
      </div>
      <div className="hidden sm:block fixed left-0 md:w-1/6 lg:w-1/6 xl:w-1/5 md:h-[400px] lg:h-[400px] xl:h-[500px] pointer-events-none z-0">
        <p className="fixed md:w-1/6 lg:w-1/6 xl:w-1/5 lg:top-32 xl:top-20 text-xl font-extrabold">Thịnh</p>
        <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <Model rotation={rotation} />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="fixed right-4 z-50">
        {!isAtContact ? (
          <button
            onClick={scrollToContact}
            className="bg-purple300 text-white px-4 py-4 rounded-full shadow-lg hover:bg-purple200 transition"
          >
            <FaEnvelope />
          </button>
        ) : (
          <button
            onClick={scrollToTop}
            className="bg-purple300 text-white px-4 py-4 rounded-full shadow-lg hover:bg-purple200 transition"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </section>
  );
}

export default Hero;