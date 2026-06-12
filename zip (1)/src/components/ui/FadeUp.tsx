import React from 'react';
import { motion } from 'motion/react';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  viewportMargin?: string;
}

export const FadeUp: React.FC<FadeUpProps> = ({ 
  children, 
  delay = 0, 
  className = '',
  viewportMargin = "-10%"
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: viewportMargin as any }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);
