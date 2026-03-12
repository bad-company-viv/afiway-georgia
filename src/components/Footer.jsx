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
                        <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-white/30 bg-white/15 shadow-sm hover:shadow-md hover:bg-white/20 transition-all duration-300">
                            {footer.credits.items.map((credit, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && <div className="h-3 w-px bg-white/30 transition-colors duration-300"></div>}
                                    <a
                                        href={credit.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                                        aria-label={credit.name}
                                    >
                                        <img src={credit.logo} alt={credit.name} className="h-3 w-auto" loading="lazy" />
                                    </a>
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};
