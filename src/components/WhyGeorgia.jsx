import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';
import { ShieldCheck, BookOpen, Wallet, Building2, Heart, Globe } from 'lucide-react';

export const WhyGeorgia = () => {
    const { whyGeorgia } = SITE_DATA;

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'shield-check': return <ShieldCheck className="w-6 h-6" />;
            case 'book-open': return <BookOpen className="w-6 h-6" />;
            case 'wallet': return <Wallet className="w-6 h-6" />;
            case 'building-2': return <Building2 className="w-6 h-6" />;
            case 'heart': return <Heart className="w-6 h-6" />;
            case 'globe': return <Globe className="w-6 h-6" />;
            default: return null;
        }
    };

    return (
        <section className="py-24 bg-[#FAFAFA]" id="why-georgia">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-[13px] uppercase tracking-widest mb-6 border border-accent/10">
                        <img src="https://flagcdn.com/ge.svg" alt="Georgia Flag" className="w-4 h-3 mr-2 rounded-[2px]" />
                        {whyGeorgia.badge}
                    </div>

                    <h2 className="text-[36px] md:text-[46px] font-extrabold text-primary mb-4 tracking-tight">
                        {whyGeorgia.title}
                    </h2>

                    <p className="text-slate-500 text-[17px] max-w-2xl mx-auto leading-relaxed">
                        {whyGeorgia.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {whyGeorgia.features.map((feature, i) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                                borderColor: "rgba(197, 154, 92, 0.3)"
                            }}
                            className="bg-white p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col transition-all duration-300 group hover-line-border"
                        >
                            <div className="w-14 h-14 bg-primary border-[1.5px] border-accent/80 text-accent rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(197,154,92,0.3)] transition-all duration-300">
                                {getIcon(feature.icon)}
                            </div>

                            <h4 className="font-bold text-[19px] text-primary mb-3 leading-snug">
                                {feature.title}
                            </h4>

                            <p className="text-[15px] font-medium text-slate-500 leading-relaxed max-w-[90%]">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
