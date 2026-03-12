import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';
import { CheckCircle2, Globe, Award, FileCheck } from 'lucide-react';

export const RecognitionAccreditation = () => {
    const { recognition } = SITE_DATA;

    const iconMap = {
        'check-circle': CheckCircle2,
        'globe': Globe,
        'award': Award,
        'file-check': FileCheck
    };

    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <span className="text-[13px] font-bold tracking-widest text-accent uppercase">{recognition.badge}</span>
                    </div>
                    <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold leading-tight text-slate-900 mb-6 max-w-3xl mx-auto">
                        {recognition.title}
                    </h2>
                    <p className="text-[17px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        {recognition.subtitle}
                    </p>
                </motion.div>

                {/* Recognition Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {recognition.features.map((feature, i) => {
                        const Icon = iconMap[feature.icon] || CheckCircle2;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-accent/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-[15px] text-slate-600 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Recognition Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-white"
                >
                    <h3 className="text-[28px] font-bold mb-8 text-center">Why Our Universities Stand Out</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {recognition.highlights.map((highlight, i) => (
                            <div key={i} className="text-center">
                                <div className="text-[32px] font-bold text-accent mb-3">{highlight.value}</div>
                                <p className="text-[15px] text-white/80">{highlight.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Accreditation Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-[24px] font-bold text-slate-900 mb-8 text-center">Recognized By</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {recognition.accreditations.map((accred, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-center hover:border-accent/30 transition-all duration-300"
                            >
                                <CheckCircle2 className="w-8 h-8 text-accent mb-3" />
                                <p className="text-[14px] font-bold text-slate-900">{accred}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
