import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/mockData';
import { Globe, Wallet, BookOpen, Building2 } from 'lucide-react';

export const GlobalEducation = () => {
    const { globalEducation } = SITE_DATA;

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'globe': return <Globe className="w-5 h-5" />;
            case 'wallet': return <Wallet className="w-5 h-5" />;
            case 'book': return <BookOpen className="w-5 h-5" />;
            case 'building': return <Building2 className="w-5 h-5" />;
            default: return null;
        }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Left Column: Content & 2x2 Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>
                            {globalEducation.badge}
                        </div>

                        <h2 className="text-[36px] md:text-[46px] font-extrabold text-primary leading-tight mb-6 tracking-tight">
                            {globalEducation.title.split('Smart Choice')[0]} <span className="text-accent">Smart Choice</span>
                        </h2>

                        <p className="text-slate-600/90 text-[17px] leading-relaxed mb-12 font-medium">
                            {globalEducation.subtitle}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {globalEducation.features.map((feat, index) => (
                                <motion.div
                                    key={feat.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 group cursor-default"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                                        {getIcon(feat.icon)}
                                    </div>
                                    <div className="transition-transform duration-300">
                                        <h4 className="font-bold text-primary mb-1 text-[15px] group-hover:text-accent transition-colors">{feat.title}</h4>
                                        <p className="text-[13px] text-slate-500 leading-snug">{feat.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Dark Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative lg:ml-auto w-full max-w-[500px]"
                    >
                        {/* Decorative background blob */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 blur-2xl rounded-[40px] -z-10"></div>

                        <div className="bg-primary rounded-[32px] p-8 md:p-10 shadow-2xl border border-white/5 relative overflow-hidden hover-line-border">
                            {/* Subtle noise/texture overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

                            {/* Card Header */}
                            <div className="flex flex-col items-center text-center mb-10 relative z-10">
                                <div className="w-14 h-10 rounded shadow-sm overflow-hidden mb-4 border border-white/10">
                                    <img src={globalEducation.card.flag} alt={`${globalEducation.card.country} Flag`} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">{globalEducation.card.country}</h3>
                                <p className="text-white/60 text-sm font-medium">{globalEducation.card.subtitle}</p>
                            </div>

                            {/* Card Stats List */}
                            <div className="space-y-0 relative z-10">
                                {globalEducation.card.stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className={`flex justify-between items-center py-4 ${index !== globalEducation.card.stats.length - 1 ? 'border-b border-white/10' : ''}`}
                                    >
                                        <span className="text-white/60 text-[15px] font-medium">{stat.label}</span>
                                        <span className={`text-[15px] font-bold ${stat.isCheck ? 'text-accent' : 'text-white'}`}>
                                            {stat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
