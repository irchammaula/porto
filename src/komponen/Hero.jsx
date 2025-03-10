"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RotatingText from "../komponen/RotatingText/RotatingText";
import Squares from "../komponen/Squares/Squares";
import BlurText from "../komponen/BlurText/BlurText";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({
            x: e.clientX - window.innerWidth / 2,
            y: e.clientY - window.innerHeight / 2,
        });
    };

    return (
        <div 
            className="hero bg-base-200 min-h-screen relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Squares Background */}
            <div className="w-full h-full absolute top-0 left-0">
                <Squares 
                    speed={0.5} 
                    squareSize={40}
                    direction="diagonal" // up, down, left, right, diagonal
                    borderColor="#fff"
                    hoverFillColor="#93a7c7"
                />
            </div>

            {/* Hero Content with Transparent Effect */}
            <motion.div 
                className="hero-content text-center border mx-auto bg-white/30 backdrop-blur-md rounded-lg p-10 shadow-lg relative"
                animate={{
                    x: mousePosition.x * 0.05,
                    y: mousePosition.y * 0.05,
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
            >
                <div className="mx-auto">
                    <div>
                        <span>I'm Ready To Be </span>
                        <RotatingText 
                            texts={["UI/UX Designer", "Web Development", "Teacher"]}
                            mainClassName="px-3 py-1 bg-gray-300 text-black rounded-lg inline-flex"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </div>
                    <h1 className="text-5xl font-bold">Hello, I'm Irham Maula</h1>
                    <p className="py-6">I'm a UI/UX & Web Development Enthusiast.</p>
                    <button className="btn" >Let's See My Project</button>
                </div>
            </motion.div>
        </div>
    );
}
