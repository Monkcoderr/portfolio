import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className={styles.hero} id="about">
            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.div
                        className={styles.intro}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className={styles.greeting}>HELLO, I'M</span>
                        <h1 className={styles.title}>[Name Placeholder]</h1>
                        <h2 className={styles.role}>Creative Developer</h2>
                    </motion.div>

                    <motion.p
                        className={styles.bio}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        I specialize in building exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products.
                    </motion.p>

                    {/* <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    > */}
                    <a
                        href="/resume.pdf"
                        className={styles.resumeBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Download size={20} />
                        Download Resume
                    </a>

                    <div className={styles.socialLinks}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
                            <Twitter size={24} />
                        </a>
                        <a href="mailto:email@example.com" className={styles.socialIcon} aria-label="Email">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
        </section >
    );
};

export default Hero;
