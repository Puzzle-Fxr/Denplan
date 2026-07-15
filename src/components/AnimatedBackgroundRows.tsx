import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundRowsProps {
  imageUrl: string;
  numberOfRows?: number;
  speed?: number;
  offset?: number;
  className?: string;
}

const AnimatedBackgroundRows: React.FC<AnimatedBackgroundRowsProps> = ({
  imageUrl,
  numberOfRows = 8,
  speed = 10,
  offset = 24,
  className,
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className ?? ''}`}>
      {Array.from({ length: numberOfRows }).map((_, index) => {
        const heightPercentage = 100 / numberOfRows;
        const isEvenRow = index % 2 === 0;
        const rowOffset = offset + (index % 3) * 10;
        const startX = isEvenRow ? -rowOffset : rowOffset;
        const endX = isEvenRow ? rowOffset : -rowOffset;

        return (
          <motion.div
            key={index}
            className="absolute left-0 w-full"
            style={{
              top: `${index * heightPercentage}%`,
              height: `${heightPercentage + 0.35}%`,
              backgroundImage: `url(${imageUrl})`,
              backgroundRepeat: 'repeat-x',
              backgroundPosition: '0 center',
              backgroundSize: 'clamp(140px, 16vw, 220px) auto',
              opacity: 0.16 + (0.04 * (index % 3)),
              filter: 'contrast(1.05) saturate(0.9)',
            }}
            animate={{ x: [startX, endX, startX] }}
            transition={{
              duration: speed + (index % 3) * 1.2,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'mirror',
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBackgroundRows;