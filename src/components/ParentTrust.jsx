import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';
import { ShieldCheck, Search, ClipboardCheck, Handshake } from 'lucide-react';

const icons = {
    'search': Search,
    'clipboard-check': ClipboardCheck,
    'handshake': Handshake
};

export const ParentTrust = () => {
    const { concerns } = SITE_DATA;
    return (
        <section className="py-24 bg-[#FCFCFC]">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-[13px] tracking-wide mb-6">
                        {concerns.badge}
                    </div>

                    <h2 className="text-[38px] md:text-[52px] font-extrabold text-[#2A0845] leading-[1.15] tracking-tight mb-4">
                        {concerns.title}
                    </h2>

                    <p className="text-slate-600 text-[16px] leading-relaxed max-w-2xl mx-auto">
                        {concerns.desc}
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {concerns.features.map((feature, i) => {
                        const IconComponent = icons[feature.icon] || ShieldCheck;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{
                                    y: -4,
                                    boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                                    borderColor: "rgba(197, 154, 92, 0.3)"
                                }}
                                className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col gap-4 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary border border-accent/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    <IconComponent className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                                </div>
                                <div>
                                    <h4 className="text-[16px] font-bold text-[#2A0845] mb-2">{feature.title}</h4>
                                    <p className="text-slate-500 text-[14px] leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Summary Footnote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-[#F3F4F6] p-6 rounded-2xl flex items-start gap-3 border border-slate-200 text-center"
                >
                    <p className="text-[14px] font-bold text-[#111827] leading-relaxed">
                        {concerns.summary}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
