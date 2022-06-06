
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function ParcticleBackground({ }) {

    const particlesInit = async (main) => {
        await loadFull(main);
    };


    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}

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
                                mode: "repulse",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 200,
                            },
                            repulse: {
                                distance: 400,
                                duration: 0.6,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#E7411D",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 200,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                            blink: true
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
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: ['circle'],
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,

                }}
            ></Particles>
        </>
    );
}
