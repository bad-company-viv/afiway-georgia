import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';
import { Users, GraduationCap, IndianRupee, TriangleAlert } from 'lucide-react';

export const RealitySection = () => {
    const { reality } = SITE_DATA;

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'users': return <Users className="w-6 h-6" />;
            case 'graduation-cap': return <GraduationCap className="w-6 h-6" />;
            case 'rupee': return <IndianRupee className="w-6 h-6" />;
            case 'warning': return <TriangleAlert className="w-6 h-6" />;
            default: return null;
        }
    };

    return (
        <section className="py-24 bg-[#FAFAFA]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-6 border border-accent/10">
                        {reality.badge}
                    </div>
                    <h2 className="text-[36px] md:text-[48px] font-extrabold text-primary mb-6 leading-tight tracking-tight">
                        {reality.title}
                    </h2>
                    <p className="text-slate-600/90 text-[17px] md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                        {reality.subtitle}
                    </p>
                </motion.div>

                {/* 4 Value Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {reality.points.map((point, index) => (
                        <motion.div
                            key={point.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                                borderColor: "rgba(197, 154, 92, 0.2)"
                            }}
                            className="bg-white p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-start transition-all duration-300 group hover-line-border"
                        >
                            <div className="w-12 h-12 bg-[#F6F4F9] text-[#3B1E5A] rounded-2xl flex items-center justify-center mb-8 shrink-0 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                                {getIcon(point.icon)}
                            </div>
                            <h3 className="text-[28px] md:text-[32px] font-extrabold text-primary mb-2 tracking-tight leading-none">{point.title}</h3>
                            <p className="text-[13px] font-semibold text-slate-400 uppercase tracking-wide">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Seat Availability Ratio Visualizer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
                >
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">
                        {reality.progress.title}
                    </p>

                    {/* Applicants Row */}
                    <div className="mb-6">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm font-bold text-slate-700">{reality.progress.applicants.label}</span>
                            <span className="text-sm font-bold text-primary">{reality.progress.applicants.value}</span>
                        </div>
                        <div className="h-4 bg-slate-100 rounded-full w-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${reality.progress.applicants.percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                className="h-full bg-primary rounded-full relative"
                            >
                                {/* Optional subtle shimmer overlay if desired */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full animate-[shimmer_2s_infinite]"></div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Government Seats Row */}
                    <div className="mb-8">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm font-bold text-slate-700">{reality.progress.seats.label}</span>
                            <span className="text-sm font-bold text-accent">{reality.progress.seats.value}</span>
                        </div>
                        <div className="h-4 bg-slate-100 rounded-full w-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${reality.progress.seats.percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                                className="h-full bg-gradient-to-r from-accent to-[#B4884B] rounded-full"
                            ></motion.div>
                        </div>
                    </div>

                    <p className="text-xs font-semibold text-slate-400">
                        {reality.progress.disclaimer}
                    </p>
                </motion.div>

            </div>
        </section>
    );
};
