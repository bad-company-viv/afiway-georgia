import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';
import { ShieldCheck, FileCheck2, FileText, Plane, BookOpen, Users } from 'lucide-react';

const icons = {
    'shield-check': ShieldCheck,
    'file-check-2': FileCheck2,
    'file-text': FileText,
    'plane': Plane,
    'book-open': BookOpen,
    'users': Users
};

export const WhyAFIway = () => {
    const { chooseAfiway } = SITE_DATA;
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 flex flex-col items-center">
                    <motion.a
                        href="/"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center p-2 mb-6 cursor-pointer"
                    >
                        <img src="/afi-logo.png" alt="AFIway Logo" className="w-full h-auto object-contain" />
                    </motion.a>
                    <h2 className="text-[36px] md:text-[44px] font-extrabold text-primary mb-4 tracking-tight leading-tight">
                        {chooseAfiway.title} <span className="text-accent">{chooseAfiway.highlight}</span>
                    </h2>
                    <p className="text-slate-500 text-[17px] max-w-2xl mx-auto leading-relaxed">
                        {chooseAfiway.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {chooseAfiway.features.map((feature, i) => {
                        const IconComponent = icons[feature.icon] || ShieldCheck;
                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    borderColor: "rgba(197, 154, 92, 0.4)",
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)"
                                }}
                                className="bg-[#FCFCFC] p-8 md:p-10 rounded-[32px] border border-slate-100 transition-all duration-300 group hover-line-border"
                            >
                                <div className="w-12 h-12 bg-accent/5 border border-accent/20 rounded-[14px] flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                    <IconComponent className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                                </div>
                                <h3 className="text-[19px] font-bold text-primary mb-3 leading-snug">{feature.title}</h3>
                                <p className="text-[15px] text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
