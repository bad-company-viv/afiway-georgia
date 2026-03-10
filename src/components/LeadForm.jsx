import React, { useState } from 'react';
import { SITE_DATA } from '../data/mockData';
import { motion } from 'framer-motion';
import { Quote, CheckCircle2 } from 'lucide-react';

export const LeadForm = () => {
    const { eligibilityCta } = SITE_DATA;
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        neet: '',
        city: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!formData.name || formData.name.trim().length < 3) newErrors.name = "Full name must be at least 3 characters";
        if (!formData.phone || !/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) newErrors.phone = "Enter a valid phone number";
        if (!formData.neet || isNaN(formData.neet) || formData.neet < 0 || formData.neet > 720) newErrors.neet = "Enter a valid NEET score (0-720)";
        if (!formData.city || formData.city.trim().length < 2) newErrors.city = "City name is too short";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: null });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', phone: '', neet: '', city: '' });
        }, 1500);
    };

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

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-md relative overflow-hidden group hover:bg-white/[0.07] transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-24 h-24 text-white -rotate-12" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex gap-1 mb-4 text-accent">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-[17px] text-white/90 leading-relaxed font-medium mb-6 italic">
                                    "{eligibilityCta.quote}"
                                </p>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="text-[14px] font-bold text-white tracking-wide uppercase">{eligibilityCta.quoteAuthor}</span>
                                </div>
                            </div>

                            {/* Decorative accent line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/40 group-hover:bg-accent transition-colors duration-500"></div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-[32px] shadow-2xl lg:ml-8"
                    >
                        <h3 className="text-[24px] font-extrabold text-[#2A0845] mb-8">{eligibilityCta.form.title}</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-[13px] font-bold text-[#2A0845] mb-2" htmlFor="name">{eligibilityCta.form.fields.name.label}</label>
                                <input value={formData.name} onChange={handleChange} className={`w-full px-5 py-3.5 bg-transparent border ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-xl text-[#111827] placeholder-slate-400 focus:border-[#2A0845] focus:ring-1 focus:ring-[#2A0845] transition-all outline-none text-[15px] font-medium`} id="name" name="name" placeholder={eligibilityCta.form.fields.name.placeholder} type="text" />
                                {errors.name && <p className="text-red-500 text-[12px] mt-1 font-bold">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-[13px] font-bold text-[#2A0845] mb-2" htmlFor="phone">{eligibilityCta.form.fields.phone.label}</label>
                                <input value={formData.phone} onChange={handleChange} className={`w-full px-5 py-3.5 bg-transparent border ${errors.phone ? 'border-red-500' : 'border-slate-200'} rounded-xl text-[#111827] placeholder-slate-400 focus:border-[#2A0845] focus:ring-1 focus:ring-[#2A0845] transition-all outline-none text-[15px] font-medium`} id="phone" name="phone" placeholder={eligibilityCta.form.fields.phone.placeholder} type="tel" />
                                {errors.phone && <p className="text-red-500 text-[12px] mt-1 font-bold">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-[13px] font-bold text-[#2A0845] mb-2" htmlFor="neet">{eligibilityCta.form.fields.neet.label}</label>
                                <input value={formData.neet} onChange={handleChange} className={`w-full px-5 py-3.5 bg-transparent border ${errors.neet ? 'border-red-500' : 'border-slate-200'} rounded-xl text-[#111827] placeholder-slate-400 focus:border-[#2A0845] focus:ring-1 focus:ring-[#2A0845] transition-all outline-none text-[15px] font-medium`} id="neet" name="neet" placeholder={eligibilityCta.form.fields.neet.placeholder} type="number" />
                                {errors.neet && <p className="text-red-500 text-[12px] mt-1 font-bold">{errors.neet}</p>}
                            </div>

                            <div>
                                <label className="block text-[13px] font-bold text-[#2A0845] mb-2" htmlFor="city">{eligibilityCta.form.fields.city.label}</label>
                                <input value={formData.city} onChange={handleChange} className={`w-full px-5 py-3.5 bg-transparent border ${errors.city ? 'border-red-500' : 'border-slate-200'} rounded-xl text-[#111827] placeholder-slate-400 focus:border-[#2A0845] focus:ring-1 focus:ring-[#2A0845] transition-all outline-none text-[15px] font-medium`} id="city" name="city" placeholder={eligibilityCta.form.fields.city.placeholder} type="text" />
                                {errors.city && <p className="text-red-500 text-[12px] mt-1 font-bold">{errors.city}</p>}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                disabled={status === 'submitting' || status === 'success'}
                                className={`w-full py-4 rounded-xl font-bold text-[16px] transition-all mt-6 flex items-center justify-center gap-2 group shadow-sm border border-transparent ${status === 'success' ? 'bg-green-500 text-white' : 'bg-accent hover:bg-accent/90 text-[#2A0845]'}`}
                                type="submit"
                            >
                                {status === 'idle' && (
                                    <>
                                        {eligibilityCta.form.cta.replace('→', '')} <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </>
                                )}
                                {status === 'submitting' && "Processing your report..."}
                                {status === 'success' && "Report Sent Successfully! ✓"}
                            </motion.button>

                            {status === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-green-600 text-[13px] font-bold mt-4"
                                >
                                    Thank you! Our advisor will contact you within 24 hours.
                                </motion.p>
                            )}

                            <p className="text-center text-[12px] text-slate-400 mt-5 font-medium">
                                {eligibilityCta.form.security}
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
