import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className={styles.title}>ABOUT_ME</h2>
                <div className={styles.content}>
                    <p>
                        I am a creative developer obsessed with the intersection of design and technology.
                        My mission is to build digital experiences that defy gravity—lightweight,
                        performant, and visually stunning.
                    </p>
                    <p>
                        With a background in full-stack development and a passion for pixel art,
                        I craft interfaces that feel both retro and futuristic.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
