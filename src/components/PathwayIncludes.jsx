import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';

export const PathwayIncludes = () => {
    const { pathwayIncludes } = SITE_DATA;
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column - List */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-[14px] font-bold text-[#C59A5C] uppercase tracking-[2px] mb-4">
                            {pathwayIncludes.title}
                        </h4>
                        <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#2A0845] leading-[1.2] mb-10">
                            {pathwayIncludes.subtitle}
                        </h2>

                        <div className="space-y-6">
                            {pathwayIncludes.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-4 group cursor-default"
                                >
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-[#C59A5C]/10 flex items-center justify-center mt-1 group-hover:bg-[#C59A5C] transition-all duration-300">
                                        <div className="w-2 h-2 rounded-full bg-[#C59A5C] group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <span className="text-[18px] md:text-[20px] font-bold text-[#2A0845] leading-snug group-hover:text-[#C59A5C] transition-colors">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 border-2 border-slate-100 rounded-[32px] translate-x-6 translate-y-6 -z-10"></div>
                        <div className="rounded-[32px] overflow-hidden shadow-2xl relative">
                            <img
                                src={pathwayIncludes.image}
                                alt="Medical students"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2A0845]/20 to-transparent"></div>
                        </div>

                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#2A0845] rounded-full flex items-center justify-center text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <div>
                                    <p className="text-[14px] font-bold text-[#2A0845]">Trusted Selection</p>
                                    <p className="text-[12px] text-slate-500 font-medium">Verified Universities Only</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
