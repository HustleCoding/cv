"use client";

import React, { useState, useEffect } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
};

interface ParticleBackgroundProps {
  isDarkMode: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  isDarkMode,
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 5 + 1,
          color: isDarkMode
            ? `hsl(${Math.random() * 360}, 70%, 70%)`
            : `hsl(${Math.random() * 360}, 70%, 30%)`,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animationDuration: `${Math.random() * 10 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
