import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>PORTFOLIO</div>

            <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className={styles.link} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </a>
                ))}
            </div>

            <button className={styles.menuButton} onClick={toggleMenu}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
    );
};

export default Navbar;
