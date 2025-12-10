import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Profile', href: '#about' },
        // { name: 'Projects', href: '#projects' }, // Keeping hidden for now until redesigned
        // { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>PORTFOLIO</div>

            <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className={styles.link} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Hidden for single-view focus
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button> 
            */}
        </nav>
    );
};

export default Navbar;
