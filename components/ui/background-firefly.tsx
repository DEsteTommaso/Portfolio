"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Firefly {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
  delay: number;
}

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const [isReducedMotion, setIsReducedMotion] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [fireflies, setFireflies] = useState<Firefly[]>([]);
    const [stars, setStars] = useState<Array<{id: number, x: number, y: number, opacity: number, duration: number}>>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      
      // Detect reduced motion preference
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      
      // Detect mobile devices and tablets
      setIsMobile(window.innerWidth < 1024);
      
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      
      // Generate fireflies
      const generateFireflies = () => {
        const fireflyCount = window.innerWidth < 1024 ? 5 : 10;
        const newFireflies: Firefly[] = [];
        
        for (let i = 0; i < fireflyCount; i++) {
          newFireflies.push({
            id: i,
            x: Math.random() * 100, // Random starting position across screen width
            y: Math.random() * 100, // Random starting position across screen height
            speed: Math.random() * 0.5 + 0.3, // Slower, more gentle movement
            size: Math.random() * 0.6 + 0.5, // Size variation
            delay: Math.random() * 3, // Stagger the start times
          });
        }
        
        setFireflies(newFireflies);
      };

      // Generate stars
      const generateStars = () => {
        const starCount = window.innerWidth < 1024 ? 10 : 30;
        const newStars = [];
        
        for (let i = 0; i < starCount; i++) {
          newStars.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0.1 + Math.random() * 0.3,
            duration: 2 + Math.random() * 3,
          });
        }
        
        setStars(newStars);
      };


      generateFireflies();
      generateStars();
      
      window.addEventListener('resize', handleResize);
    }, []);

    return (
      <div
        className={cn(
          "fixed z-[-1] inset-0 h-screen w-screen overflow-hidden pointer-events-none",
          className,
        )}
        style={{
          transform: 'translate3d(0, 0, 0)',
          willChange: 'auto'
        }}
      >
        {/* Fireflies */}
        {!isReducedMotion && mounted && fireflies.map((firefly) => {
          // Generate random movement path for each firefly on each render cycle
          const randomPath = {
            x: [0, 
                Math.random() * 300 - 150, 
                Math.random() * 300 - 150, 
                Math.random() * 300 - 150, 
                Math.random() * 300 - 150, 
                0],
            y: [0, 
                Math.random() * 300 - 150, 
                Math.random() * 300 - 150, 
                Math.random() * 300 - 150, 
                Math.random() * 300 - 150, 
                0],
            opacity: [0, 0.6, 1, 0.8, 0.4, 0.9, 0.2, 0],
          };
          
          return (
            <motion.div
              key={`firefly-${firefly.id}-${firefly.x}-${firefly.y}`} // Force re-render with new path
              className="absolute"
              style={{
                left: `${firefly.x}%`,
                top: `${firefly.y}%`,
              }}
              initial={{ 
                x: 0, 
                y: 0,
                opacity: 0 
              }}
              animate={randomPath}
              transition={{
                duration: 8 + Math.random() * 6,
                delay: firefly.delay,
                repeat: Infinity,
                repeatDelay: 1 + Math.random() * 4,
                ease: "easeInOut",
              }}
            >
              {/* Firefly (glowing orb) */}
              <div 
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #18CCFC 0%, #6344F5 50%, #AE48FF 80%, transparent 100%)',
                  transform: `scale(${firefly.size})`,
                  filter: 'blur(0.3px)',
                  boxShadow: '0 0 6px #18CCFC, 0 0 12px #6344F5, 0 0 18px #AE48FF',
                  animation: `firefly-glow ${1.5 + Math.random() * 2.5}s ease-in-out infinite alternate`,
                }}
              />
            </motion.div>
          );
        })}

        {/* Static background stars for ambiance */}
        {mounted && (
          <div className="absolute inset-0">
            {stars.map((star) => (
              <div
                key={`star-${star.id}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  opacity: star.opacity,
                  animation: `twinkle ${star.duration}s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </div>
        )}

        {/* Add CSS animations */}
        <style jsx>{`
          @keyframes twinkle {
            0% { opacity: 0.1; transform: scale(1); }
            100% { opacity: 0.4; transform: scale(1.2); }
          }
          @keyframes firefly-glow {
            0% { 
              filter: blur(0.3px); 
              box-shadow: 0 0 6px #18CCFC, 0 0 12px #6344F5, 0 0 18px #AE48FF;
              transform: scale(1);
            }
            50% {
              filter: blur(0.2px);
              box-shadow: 0 0 10px #18CCFC, 0 0 20px #6344F5, 0 0 30px #AE48FF;
              transform: scale(1.3);
            }
            100% { 
              filter: blur(0.4px); 
              box-shadow: 0 0 4px #18CCFC, 0 0 8px #6344F5, 0 0 12px #AE48FF;
              transform: scale(0.8);
            }
          }
        `}</style>
      </div>
    );
  },
);

BackgroundBeams.displayName = "BackgroundBeams";
