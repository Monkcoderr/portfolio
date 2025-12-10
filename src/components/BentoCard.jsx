import React from 'react';
import styles from './BentoCard.module.css';
import { motion } from 'framer-motion';

const BentoCard = ({ children, title, icon: Icon, colSpan = 1, rowSpan = 1, className = '', href }) => {

    const Wrapper = href ? motion.a : motion.div;

    return (
        <Wrapper
            href={href}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            className={`${styles.card} ${styles[`colSpan${colSpan}`]} ${styles[`rowSpan${rowSpan}`]} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            {title && (
                <div className={styles.title}>
                    {Icon && <Icon size={16} />}
                    {title}
                </div>
            )}
            <div className={styles.content}>
                {children}
            </div>
        </Wrapper>
    );
};

export default BentoCard;
