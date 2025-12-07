import React from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <h2 className={styles.title}>ESTABLISH_UPLINK</h2>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <Mail className={styles.icon} />
                        <span>hello@antigravity.dev</span>
                    </div>
                    <div className={styles.infoItem}>
                        <Phone className={styles.icon} />
                        <span>+1 (555) 010-1010</span>
                    </div>
                    <div className={styles.infoItem}>
                        <MapPin className={styles.icon} />
                        <span>Orbiting Earth</span>
                    </div>
                </div>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">CODENAME</label>
                        <input type="text" id="name" className={styles.input} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">FREQUENCY</label>
                        <input type="email" id="email" className={styles.input} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">TRANSMISSION</label>
                        <textarea id="message" rows="5" className={styles.textarea}></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className={styles.submit}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        SEND_DATA
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
