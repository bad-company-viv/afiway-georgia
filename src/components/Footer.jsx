import React from 'react';
import { SITE_DATA } from '../data/mockData';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
    const { footer } = SITE_DATA;
    return (
        <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-16 mb-20">
                    {/* Branding Column */}
                    <div className="flex flex-col items-start">
                        <a href="/" className="flex items-center gap-2 mb-8 group">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm border border-slate-100/10 group-hover:scale-105 transition-transform duration-300">
                                <img src="/afi-logo.png" alt="AFIway Logo" className="w-full h-auto object-contain" />
                            </div>
                            <span className="text-[22px] font-extrabold tracking-tight text-white">
                                AFI<span className="text-accent">way</span>
                            </span>
                        </a>
                        <p className="text-white/50 text-[15px] leading-relaxed max-w-[280px]">
                            {footer.desc}
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="font-bold text-white text-[17px] mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            {footer.links.map((link, i) => (
                                <li key={i}>
                                    <a className="text-white/50 hover:text-accent transition-colors text-[15px] flex items-center gap-2 group" href={link.href}>
                                        <span className="w-1 h-1 rounded-full bg-accent/30 group-hover:bg-accent transition-colors"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-bold text-white text-[17px] mb-8">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-white/50 group">
                                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                                    <Phone className="w-4 h-4 text-accent" />
                                </div>
                                <span className="text-[14px]">{footer.contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-4 text-white/50 group">
                                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                                    <Mail className="w-4 h-4 text-accent" />
                                </div>
                                <span className="text-[14px]">{footer.contact.email}</span>
                            </li>
                            <li className="flex items-center gap-4 text-white/50 group">
                                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                                    <MapPin className="w-4 h-4 text-accent" />
                                </div>
                                <span className="text-[14px]">{footer.contact.location}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-[13px] font-medium tracking-wide">
                        {footer.copyright}
                    </p>

                    {footer.credits && (
                        <div className="flex items-center gap-4">
                            <span className="text-white/20 text-[11px] uppercase tracking-widest font-bold hidden sm:block">{footer.credits.label}</span>
                            <div className="bg-white px-5 py-2 rounded-full flex items-center gap-5 shadow-lg border border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
                                {footer.credits.items.map((credit, i) => (
                                    <React.Fragment key={i}>
                                        {i > 0 && <div className="w-px h-4 bg-slate-200"></div>}
                                        <a
                                            href={credit.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:scale-110 transition-transform duration-300 flex items-center"
                                        >
                                            <img src={credit.logo} alt={credit.name} className="h-4 md:h-5 w-auto object-contain transition-all duration-300" />
                                        </a>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};
