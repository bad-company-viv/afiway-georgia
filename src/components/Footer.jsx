import React from 'react';
import { SITE_DATA } from '../data/mockData';

export const Footer = () => {
    const { footer } = SITE_DATA;
    return (
        <footer className="bg-primary text-white py-10 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-center gap-6">
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
