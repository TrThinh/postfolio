import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const StarBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#240046",
          },
        },
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 1.5,
          },
          move: {
            enable: true,
            speed: 0.5,
          },
        },
      }}
    />
  );
};

export default StarBackground;
