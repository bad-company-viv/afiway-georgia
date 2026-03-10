import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';
import { Quote, Star, CheckCircle2 } from 'lucide-react';

export const Testimonials = () => {
    const { testimonials } = SITE_DATA;

    return (
        <section className="py-24 bg-neutral overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59A5C]/10 border border-[#C59A5C]/20 mb-4"
                    >
                        <span className="text-[12px] font-bold text-[#C59A5C] uppercase tracking-widest">{testimonials.badge}</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[36px] md:text-[48px] font-extrabold text-[#2A0845] leading-tight mb-4"
                    >
                        {testimonials.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg max-w-2xl mx-auto font-medium"
                    >
                        {testimonials.subtitle}
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.items.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                                boxShadow: "0 25px 50px -12px rgba(42, 8, 69, 0.12)"
                            }}
                            className="group relative bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 transition-all duration-500 flex flex-col h-full hover-line-border"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                                <Quote className="w-6 h-6 text-[#C59A5C]" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#C59A5C] text-[#C59A5C]" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-[#2A0845] text-[18px] leading-relaxed font-medium mb-8 grow italic">
                                "{item.text}"
                            </p>

                            {/* Author Information */}
                            <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                <div className="relative shrink-0">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden ring-4 ring-slate-50 transition-all group-hover:ring-[#C59A5C]/20">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#C59A5C]" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[16px] font-bold text-[#2A0845] leading-tight flex items-center gap-2">
                                        {item.name}
                                    </h4>
                                    <div className="text-[13px] text-slate-500 font-medium">
                                        {item.role} • <span className="text-[#C59A5C]">{item.university}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
