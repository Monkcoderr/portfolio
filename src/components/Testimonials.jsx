import React from 'react';
import styles from './Testimonials.module.css';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "The anti-gravity interface they built for us completely redefined our brand identity. It's not just a website; it's an experience.",
        author: "Sarah J., CEO of OrbitTech",
        role: "Client"
    },
    {
        text: "Incredible attention to detail. The pixel art style combined with modern animations is a stroke of genius.",
        author: "Mike R., Lead Designer",
        role: "Colleague"
    },
    {
        text: "Fast, responsive, and visually stunning. Highly recommended for anyone looking to stand out.",
        author: "Elena V., Founder",
        role: "Client"
    }
];

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <h2 className={styles.title}>TRANSMISSIONS</h2>
            <div className={styles.grid}>
                {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Quote className={styles.icon} />
                        <p className={styles.text}>"{t.text}"</p>
                        <div className={styles.author}>
                            <strong>{t.author}</strong>
                            <span>{t.role}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
