import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const FloatingCTA = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="fixed bottom-8 right-8 z-40"
        >
            <motion.a
                href="#eligibility"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-accent text-primary px-6 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
                <MessageCircle className="w-6 h-6" />
                <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={isHovered ? { opacity: 1, width: 'auto' } : { opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden whitespace-nowrap"
                >
                    Get Free Counselling
                </motion.span>
            </motion.a>
        </motion.div>
    );
};
