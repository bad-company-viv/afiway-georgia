import { useState, useEffect } from 'react';

export const usePopupTrigger = (delay = 10000) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenTriggered, setHasBeenTriggered] = useState(false);

    useEffect(() => {
        // Check if already triggered in this session
        const sessionTriggered = sessionStorage.getItem('popup_triggered');
        if (sessionTriggered) {
            setHasBeenTriggered(true);
            return;
        }

        const triggerPopup = () => {
            if (!hasBeenTriggered) {
                setIsOpen(true);
                setHasBeenTriggered(true);
                sessionStorage.setItem('popup_triggered', 'true');
            }
        };

        // Scroll trigger
        const handleScroll = () => {
            const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
            if (scrollPercent >= 0.5) {
                triggerPopup();
                window.removeEventListener('scroll', handleScroll);
            }
        };

        // Timer trigger
        const timer = setTimeout(() => {
            triggerPopup();
        }, delay);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, [hasBeenTriggered, delay]);

    const closePopup = () => {
        setIsOpen(false);
    };

    return { isOpen, closePopup };
};
