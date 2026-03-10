import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';

export const HeroSection = () => {
    const { hero } = SITE_DATA;
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32">
            {/* Immersive Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={hero.bgImage}
                    alt="University background"
                    className="w-full h-full object-cover"
                />
                {/* Neutral dark overlay for text readability - NO PURPLE TINT */}
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#2A0845]"></div>
            </div>

            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Urgency Badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 mx-auto">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                        </span>
                        <span className="text-[13px] font-bold tracking-widest text-accent uppercase">{hero.badge}</span>
                    </div>

                    {/* Academic Heading - Using serif-style aesthetic via custom weights and letter spacing */}
                    <h1 className="text-[40px] sm:text-[56px] lg:text-[76px] font-bold leading-[1.05] tracking-tight text-white mb-8 max-w-4xl mx-auto drop-shadow-2xl">
                        Your Marks
                        <span className="font-normal opacity-90 text-accent"> Should Not Decide</span> <br />
                        Your Future
                    </h1>

                    <p className="text-[17px] md:text-[20px] text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                        {hero.description}
                    </p>

                    {/* Centered CTA Pair */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20">
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(197, 154, 92, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent text-primary px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center gap-3 group"
                            href="#eligibility"
                        >
                            <span>Check Eligibility</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.a>


                    </div>

                    {/* Floating Stats - Subtle row at bottom */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-3xl mx-auto pt-10 border-t border-white/10">
                        {hero.stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 + (i * 0.1) }}
                                className="flex flex-col items-center"
                            >
                                <span className="text-[28px] sm:text-3xl font-extrabold text-white mb-1">{stat.value}</span>
                                <span className="text-[11px] font-bold text-accent uppercase tracking-[3px]">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            </motion.div>
        </section>
    );
};
