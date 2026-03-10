import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Navigation = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    const headerBg = useTransform(
        scrollY,
        [0, 50],
        ['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.98)']
    );
    const headerShadow = useTransform(
        scrollY,
        [0, 50],
        ['none', '0 4px 20px -2px rgba(0, 0, 0, 0.05)']
    );

    return (
        <motion.nav
            style={{ backgroundColor: headerBg, boxShadow: headerShadow }}
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4 border-b border-slate-100'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.a
                        href="/"
                        className="flex-shrink-0 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src="/afi-logo.png" alt="AFIway" className="h-10 w-auto object-contain" />
                    </motion.a>
                    <div className="hidden md:flex space-x-8 items-center">
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
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent text-white px-6 py-2.5 rounded-custom font-semibold shadow-[0_4px_14px_0_rgba(197,154,92,0.39)] hover:bg-accent-hover hover:shadow-[0_6px_20px_rgba(197,154,92,0.23)] transition-all"
                            href="#eligibility"
                        >
                            Check Eligibility
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};
