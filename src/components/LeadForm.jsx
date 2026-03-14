import React, { useEffect } from 'react';
import { SITE_DATA } from '../data/mockData';
import { motion } from 'framer-motion';

export const LeadForm = () => {
    const { eligibilityCta } = SITE_DATA;

    useEffect(() => {
        // Load the form embed script
        const script = document.createElement('script');
        script.src = 'https://link.on.bingo/js/form_embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="py-24 bg-[#2A0845] relative overflow-hidden" id="eligibility">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-white pt-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent font-bold text-[13px] border border-white/10 mb-8 backdrop-blur-sm">
                            {eligibilityCta.badge}
                        </div>

                        <h2 className="text-[36px] md:text-[48px] font-extrabold leading-[1.1] mb-6 tracking-tight">
                            {eligibilityCta.title} <br />
                            <span className="text-accent">{eligibilityCta.highlight}</span>
                        </h2>

                        <p className="text-white/80 text-[17px] mb-8 font-medium">
                            {eligibilityCta.subtitle}
                        </p>

                        <ul className="space-y-4 mb-14">
                            {eligibilityCta.features.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 w-[22px] h-[22px] rounded-full flex items-center justify-center border border-accent text-accent shrink-0">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="font-medium text-white/90 text-[15px] leading-relaxed">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column - Embedded Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-[32px] shadow-2xl lg:ml-8 overflow-hidden"
                    >
                        {/* Form Header */}
                        <div className="bg-gradient-to-r from-[#2A0845] to-[#3D0F5C] px-8 md:px-10 py-8 md:py-10">
                            <h3 className="text-[28px] md:text-[32px] font-extrabold text-white mb-2">Get Your Free Report</h3>
                            <p className="text-white/80 text-[15px] font-medium">Fill out the form below for a personalized eligibility assessment</p>
                        </div>

                        {/* Form Container */}
                        <div className="p-8 md:p-10" style={{ minHeight: '500px' }}>
                            <iframe
                                src="https://link.on.bingo/widget/form/sBuB5jLY9gQZn8kZLdW2"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    border: 'none',
                                    borderRadius: '10px',
                                    minHeight: '450px'
                                }}
                                id="inline-sBuB5jLY9gQZn8kZLdW2"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Form 1"
                                data-height="493"
                                data-layout-iframe-id="inline-sBuB5jLY9gQZn8kZLdW2"
                                data-form-id="sBuB5jLY9gQZn8kZLdW2"
                                title="Form 1"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
