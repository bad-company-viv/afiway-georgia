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
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column - Text & Quote */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-32"
                    >
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-[13px] tracking-wide mb-6">
                            {concerns.badge}
                        </div>

                        <h2 className="text-[38px] md:text-[46px] font-extrabold text-[#2A0845] leading-[1.15] tracking-tight mb-8">
                            {concerns.title}
                        </h2>

                        {/* Quote Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 mb-8 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                                <ShieldCheck className="w-5 h-5 text-accent" strokeWidth={2} />
                            </div>
                            <div>
                                <p className="text-[19px] font-bold text-[#2A0845] italic mb-1.5 leading-snug">
                                    {concerns.quote}
                                </p>
                                <p className="text-[13px] text-slate-500 font-medium">
                                    {concerns.quoteSubtitle}
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-600 text-[16px] leading-relaxed">
                            {concerns.desc}
                        </p>
                    </motion.div>

                    {/* Right Column - Feature Cards */}
                    <div className="space-y-4">
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
                                        x: 6,
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                                        borderColor: "rgba(245, 158, 11, 0.3)"
                                    }}
                                    className="bg-white p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex gap-5 items-start transition-all duration-300 group hover-line-border"
                                >
                                    <div className="w-[52px] h-[52px] rounded-[16px] bg-primary border border-accent/30 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                        <IconComponent className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold text-[#2A0845] mb-2">{feature.title}</h4>
                                        <p className="text-slate-500 text-[15px] leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Summary Footnote */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-6 bg-[#F3F4F6] p-5 rounded-2xl flex items-start gap-3 border border-slate-200"
                        >
                            <p className="text-[14px] font-bold text-[#111827] leading-relaxed">
                                {concerns.summary}
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
