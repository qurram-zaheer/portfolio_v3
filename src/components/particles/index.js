import React from "react";
import Particles from "react-tsparticles";
import "./style.css";
import bgImg from "../../assets/bg.jpg";

const ParticlesComponent = () => {
  return (
    <div className="absolute w-full md:w-1/2 h-screen">
      <Particles
        id="tsparticles"
        className="h-full"
        canvasClassName="bg-cover bg-center"
        options={{
          background: {
            image: `linear-gradient(
            rgba(0, 0, 0, 0.2), 
            rgba(0, 0, 0, 0.2)
          ),
          url(${bgImg})`,
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                speed: 3,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesComponent;
