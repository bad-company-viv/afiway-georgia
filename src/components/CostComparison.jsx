import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';
import { CheckCircle2, XCircle } from 'lucide-react';

export const CostComparison = () => {
    const { costComparison } = SITE_DATA;
    return (
        <section className="py-24 bg-white relative">
            <div className="absolute top-1/2 left-0 w-full h-[50%] bg-[#FAFAFA] -z-10"></div>
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 text-accent font-bold text-[11px] uppercase tracking-[0.15em] mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {costComparison.badge}
                    </div>
                    <h2 className="text-[36px] md:text-[44px] font-extrabold text-primary mb-4 tracking-tight">
                        {costComparison.title}
                    </h2>
                    <p className="text-slate-500 text-[17px] max-w-2xl mx-auto leading-relaxed">
                        {costComparison.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                    {/* India Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
                        className="bg-white p-10 lg:p-12 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col transition-all duration-300 hover-line-border"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0">
                                <img src="https://flagcdn.com/in.svg" alt="India" className="w-[120%] h-[120%] object-cover -ml-[10%] -mt-[10%]" />
                            </div>
                            <h3 className="text-[19px] font-bold text-[#111827]">{costComparison.india.title}</h3>
                        </div>

                        <div className="mb-8 pb-8 border-b border-slate-100">
                            <p className="text-[42px] font-extrabold text-[#111827] tracking-tight leading-none mb-3">{costComparison.india.price}</p>
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">{costComparison.india.subtitle}</p>
                        </div>

                        <ul className="space-y-5 flex-1">
                            {costComparison.india.points.map((pt, i) => (
                                <li key={i} className="flex items-start gap-4 text-slate-600 font-medium text-[15px] leading-snug">
                                    <div className="mt-0.5 shrink-0">
                                        <XCircle className="w-[18px] h-[18px] text-[#FF5252] fill-[#FF5252]/10" strokeWidth={2.5} />
                                    </div>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Georgia Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -5, boxShadow: "0 25px 60px rgba(42,8,69,0.35)" }}
                        className="bg-[#2A0845] p-10 lg:p-12 rounded-[32px] shadow-[0_20px_50px_rgba(42,8,69,0.25)] relative text-white flex flex-col md:scale-[1.03] z-10 transition-all duration-300 hover-line-border"
                    >
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white px-5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase shadow-lg">
                            RECOMMENDED
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 shadow-sm shrink-0">
                                <img src="https://flagcdn.com/ge.svg" alt="Georgia" className="w-[120%] h-[120%] object-cover -ml-[10%] -mt-[10%]" />
                            </div>
                            <h3 className="text-[19px] font-bold">{costComparison.georgia.title}</h3>
                        </div>

                        <div className="mb-8 pb-8 border-b border-white/5">
                            <p className="text-[42px] font-extrabold text-accent tracking-tight leading-none mb-3">{costComparison.georgia.price}</p>
                            <p className="text-[11px] font-bold text-white/60 uppercase tracking-[0.1em]">{costComparison.georgia.subtitle}</p>
                        </div>

                        <ul className="space-y-5 flex-1">
                            {costComparison.georgia.points.map((pt, i) => (
                                <li key={i} className="flex items-start gap-4 text-white/95 font-medium text-[15px] leading-snug">
                                    <div className="mt-0.5 shrink-0">
                                        <CheckCircle2 className="w-[18px] h-[18px] text-accent fill-accent/20" strokeWidth={2.5} />
                                    </div>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
