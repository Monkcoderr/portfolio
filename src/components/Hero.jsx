import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.starfield}></div>
            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    HELLO_WORLD
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    I build anti-gravity experiences.
                </motion.p>
                <motion.button
                    className={styles.cta}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    VIEW_PROJECTS
                </motion.button>
            </div>
            <div className={styles.floatingElements}>
                <motion.div
                    className={styles.planet}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />
            </div>
        </section>
    );
};

export default Hero;
