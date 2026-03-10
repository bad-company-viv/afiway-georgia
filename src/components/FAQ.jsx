import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQ = () => {
    const { faq } = SITE_DATA;
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => setOpenId(openId === id ? null : id);

    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-start gap-5 mb-12">
                    <div className="w-12 h-12 rounded-[14px] bg-[#2A0845]/5 flex items-center justify-center shrink-0">
                        <HelpCircle className="w-6 h-6 text-[#2A0845]" />
                    </div>
                    <div>
                        <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#2A0845] leading-tight mb-1">
                            {faq.title}
                        </h2>
                        <p className="text-slate-500 text-[15px] font-medium uppercase tracking-wider">
                            {faq.subtitle}
                        </p>
                    </div>
                </div>

                {/* Accordion Items */}
                <div className="space-y-4">
                    {faq.items.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-[20px] border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover-line-border"
                        >
                            <button
                                onClick={() => toggle(item.id)}
                                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-accent/5 group"
                            >
                                <span className="text-[17px] font-bold text-[#2A0845] leading-snug pr-8">
                                    {item.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openId === item.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="shrink-0"
                                >
                                    <ChevronDown className={`w-5 h-5 transition-colors ${openId === item.id ? 'text-accent' : 'text-slate-300 group-hover:text-slate-400'}`} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openId === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-slate-600 text-[16px] leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
