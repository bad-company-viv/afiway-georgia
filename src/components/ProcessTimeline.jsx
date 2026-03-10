import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';
import { UserCheck, Building, FileText, Plane, GraduationCap } from 'lucide-react';
import { useRef } from 'react';

const icons = {
    'user-check': UserCheck,
    'building': Building,
    'file-text': FileText,
    'plane': Plane,
    'graduation-cap': GraduationCap
};

export const ProcessTimeline = () => {
    const { process } = SITE_DATA;
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="py-24 bg-[#FAFAFA]" id="process">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#2A0845]/5 text-[#2A0845] font-bold text-[13px] mb-6 shadow-sm border border-slate-200/60"
                    >
                        {process.badge}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[36px] md:text-[44px] font-extrabold text-[#2A0845] mb-4 tracking-tight leading-tight"
                    >
                        {process.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.1 }}
                        className="text-slate-500 text-[17px] max-w-2xl mx-auto leading-relaxed"
                    >
                        {process.subtitle}
                    </motion.p>
                </div>

                <div className="relative pl-8 md:pl-28 py-10" ref={containerRef}>
                    {/* Animated vertical line */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-[23px] md:left-[63px] top-0 bottom-0 w-0.5 bg-accent"
                    ></motion.div>

                    {/* Static faint line underneath */}
                    <div className="absolute left-[23px] md:left-[63px] top-0 bottom-0 w-0.5 bg-[#C59A5C]/20 -z-10"></div>

                    <div className="space-y-12">
                        {process.steps.map((step, i) => {
                            const IconComponent = icons[step.icon] || UserCheck;
                            return (
                                <div key={step.id} className="relative">
                                    {/* Icon Container located on the line */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="absolute -left-[32px] md:-left-[72px] w-[46px] h-[46px] rounded-[14px] bg-primary border-[3px] border-[#FAFAFA] flex items-center justify-center z-10 shadow-md"
                                        style={{ top: 'calc(50% - 23px)' }}
                                    >
                                        <IconComponent className="w-5 h-5 text-accent" strokeWidth={2.5} />
                                    </motion.div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5, delay: i * 0.15 }}
                                        whileHover={{ x: 8, boxShadow: "0 15px 40px rgba(0,0,0,0.06)" }}
                                        className="bg-white p-7 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-300 ml-6 md:ml-6 group hover-line-border"
                                    >
                                        <div className="inline-flex items-center px-3 py-1 rounded-md bg-accent/5 text-accent font-bold text-[11px] uppercase tracking-wider mb-4 border border-accent/20">
                                            STEP {step.num}
                                        </div>
                                        <h3 className="text-[20px] font-bold text-[#2A0845] mb-2 leading-snug">{step.title}</h3>
                                        <p className="text-[15px] text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
