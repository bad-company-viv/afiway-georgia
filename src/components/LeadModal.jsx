import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const LeadModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        // Load the form embed script
        const script = document.createElement('script');
        script.src = 'https://link.on.bingo/js/form_embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#2A0845]/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-slate-100 transition-colors z-20 shadow-md"
                        >
                            <X className="w-6 h-6 text-[#2A0845]" />
                        </button>

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
            )}
        </AnimatePresence>
    );
};
