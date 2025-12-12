import React from 'react';
import styles from './Experience.module.css';
import { motion } from 'framer-motion';

const experiences = [
    // {
    //     role: 'Senior Frontend Engineer',
    //     company: 'TechNova',
    //     period: '2023 - Present',
    //     description: 'Leading the development of next-gen web applications using React and WebGL.',
    // },
    {
        role: 'Full Stack Developer',
        company: 'PixelForge',
        period: '2021 - 2023',
        description: 'Built scalable backend services and interactive frontend interfaces.',
    },
    {
        role: 'Junior Developer',
        company: 'StartUp Inc',
        period: '2019 - 2021',
        description: 'Collaborated on various client projects and learned modern web standards.',
    },
];

const Experience = () => {
    return (
        <section id="experience" className={styles.experience}>
            <h2 className={styles.title}>TIMELINE</h2>
            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className={styles.item}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div className={styles.marker}></div>
                        <div className={styles.content}>
                            <h3 className={styles.role}>{exp.role}</h3>
                            <h4 className={styles.company}>{exp.company}</h4>
                            <span className={styles.period}>{exp.period}</span>
                            <p className={styles.description}>{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
