import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export const Navigation = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                background: isScrolled 
                    ? 'rgba(255, 255, 255, 0.8)' 
                    : 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: isScrolled 
                    ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)' 
                    : '0 4px 16px 0 rgba(31, 38, 135, 0.08)'
            }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            <div className="w-full px-4 lg:px-8">
                <div className="flex justify-between items-center py-1">
                    <motion.a
                        href="/"
                        className="shrink-0 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src="/afi-logo.png" alt="AFIway" className="h-24 w-24 object-contain" />
                    </motion.a>
                    
                    <div className="hidden md:flex space-x-16 items-center flex-1 justify-center">
                        <motion.a
                            whileHover={{ y: -2, color: 'var(--color-accent)' }}
                            className="text-sm font-medium text-slate-700 transition-colors"
                            href="#why-georgia"
                        >
                            Why Georgia
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -2, color: 'var(--color-accent)' }}
                            className="text-sm font-medium text-slate-700 transition-colors"
                            href="#process"
                        >
                            Admission Process
                        </motion.a>
                    </div>
                    
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent text-white px-6 py-2.5 rounded-custom font-semibold shadow-[0_4px_14px_0_rgba(197,154,92,0.39)] hover:bg-accent-hover hover:shadow-[0_6px_20px_rgba(197,154,92,0.23)] transition-all shrink-0"
                        href="#eligibility"
                    >
                        Check Eligibility
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    );
};
