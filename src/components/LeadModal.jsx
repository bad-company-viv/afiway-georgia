import React, { useState } from 'react';
import { SITE_DATA } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

export const LeadModal = ({ isOpen, onClose }) => {
    const { eligibilityCta } = SITE_DATA;
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        neet: '',
        city: ''
    });
    const [status, setStatus] = useState('idle');
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
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', phone: '', neet: '', city: '' });
            setTimeout(onClose, 3000); // Close after success message
        }, 1500);
    };

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
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
                        >
                            <X className="w-6 h-6 text-[#2A0845]/50 hover:text-[#2A0845]" />
                        </button>

                        <div className="p-8 md:p-10">
                            <h3 className="text-[24px] font-extrabold text-[#2A0845] mb-2">{eligibilityCta.form.title}</h3>
                            <p className="text-slate-500 text-[14px] mb-8 font-medium">Please fill out the form for a free consultation.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-[13px] font-bold text-[#2A0845] mb-1.5" htmlFor="modal-name">Full Name</label>
                                    <input value={formData.name} onChange={handleChange} className={`w-full px-5 py-3 bg-transparent border ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-xl text-[#111827] placeholder-slate-400 focus:border-[#2A0845] focus:ring-1 focus:ring-[#2A0845] transition-all outline-none text-[15px] font-medium`} id="modal-name" name="name" placeholder="Enter your full name" type="text" />
                                    {errors.name && <p className="text-red-500 text-[11px] mt-1 font-bold">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold text-[#2A0845] mb-1.5" htmlFor="modal-phone">Phone Number</label>
                                    <input value={formData.phone} onChange={handleChange} className={`w-full px-5 py-3 bg-transparent border ${errors.phone ? 'border-red-500' : 'border-slate-200'} rounded-xl text-[#111827] placeholder-slate-400 focus:border-[#2A0845] focus:ring-1 focus:ring-[#2A0845] transition-all outline-none text-[15px] font-medium`} id="modal-phone" name="phone" placeholder="Enter phone number" type="tel" />
                                    {errors.phone && <p className="text-red-500 text-[11px] mt-1 font-bold">{errors.phone}</p>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[13px] font-bold text-[#2A0845] mb-1.5" htmlFor="modal-neet">NEET Score</label>
                                        <input value={formData.neet} onChange={handleChange} className={`w-full px-5 py-3 bg-transparent border ${errors.neet ? 'border-red-500' : 'border-slate-200'} rounded-xl text-[#111827] placeholder-slate-400 focus:border-[#2A0845] focus:ring-1 focus:ring-[#2A0845] transition-all outline-none text-[15px] font-medium`} id="modal-neet" name="neet" placeholder="0-720" type="number" />
                                        {errors.neet && <p className="text-red-500 text-[11px] mt-1 font-bold">{errors.neet}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-bold text-[#2A0845] mb-1.5" htmlFor="modal-city">City</label>
                                        <input value={formData.city} onChange={handleChange} className={`w-full px-5 py-3 bg-transparent border ${errors.city ? 'border-red-500' : 'border-slate-200'} rounded-xl text-[#111827] placeholder-slate-400 focus:border-[#2A0845] focus:ring-1 focus:ring-[#2A0845] transition-all outline-none text-[15px] font-medium`} id="modal-city" name="city" placeholder="Your city" type="text" />
                                        {errors.city && <p className="text-red-500 text-[11px] mt-1 font-bold">{errors.city}</p>}
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    disabled={status === 'submitting' || status === 'success'}
                                    className={`w-full py-4 rounded-xl font-bold text-[16px] transition-all mt-4 flex items-center justify-center gap-2 group shadow-sm border border-transparent ${status === 'success' ? 'bg-green-500 text-white' : 'bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#2A0845]'}`}
                                    type="submit"
                                >
                                    {status === 'idle' && (
                                        <>
                                            Get Free Consultation <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </>
                                    )}
                                    {status === 'submitting' && "Processing..."}
                                    {status === 'success' && "Success! ✓"}
                                </motion.button>

                                {status === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center text-green-600 text-[12px] font-bold mt-2"
                                    >
                                        Thank you! We'll contact you soon.
                                    </motion.p>
                                )}

                                <div className="flex items-center justify-center gap-2 pt-4 opacity-50">
                                    <CheckCircle2 className="w-4 h-4 text-[#2A0845]" />
                                    <span className="text-[11px] font-bold text-[#2A0845] uppercase tracking-wider">{eligibilityCta.form.security}</span>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
