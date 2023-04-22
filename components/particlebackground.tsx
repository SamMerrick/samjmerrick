import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            attract: {
              distance: 200,
              duration: 0.4,
              easing: "ease-out-quad",
              factor: 1,
              maxSpeed: 50,
              speed: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "random",
            opacity: 0.4,
            width: 1,
            triangles: {
              enable: true,
              color: "#ffffff",
              opacity: 0.1,
            },
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
            attract: { distance: 200, enable: true },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.2, max: 0.5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticleBackground;
