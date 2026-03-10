'use client';

import { motion } from 'framer-motion';

export const RevealUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const RevealLeft = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
