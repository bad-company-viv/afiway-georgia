import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';
import { Phone } from 'lucide-react';

export const FinalCTA = () => {
    const { finalCta } = SITE_DATA;
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[36px] md:text-[52px] font-extrabold text-[#2A0845] leading-[1.1] mb-6 tracking-tight">
                        {finalCta.title} <br />
                        <span className="text-[#C59A5C]">{finalCta.highlight}</span> {finalCta.titleEnd}
                    </h2>

                    <p className="text-[#64748B] text-[17px] md:text-[19px] max-w-2xl mx-auto mb-12 leading-relaxed">
                        {finalCta.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
                        <motion.a
                            whileHover={{ scale: 1.02, backgroundColor: '#B4884B' }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#C59A5C] text-[#2A0845] px-10 py-4 rounded-xl font-bold text-[16px] transition-all w-full sm:w-auto flex items-center justify-center gap-2 shadow-sm"
                            href="#eligibility"
                        >
                            {finalCta.primaryCta} <span className="text-[18px]">→</span>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.02, backgroundColor: '#F8FAFC' }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white border border-[#E2E8F0] text-[#2A0845] px-10 py-4 rounded-xl font-bold text-[16px] transition-all w-full sm:w-auto flex items-center justify-center gap-3 shadow-sm"
                            href="https://wa.me/your-number"
                        >
                            <Phone className="w-4 h-4 text-[#C59A5C]" />
                            {finalCta.secondaryCta}
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
