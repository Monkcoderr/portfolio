import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe } from 'lucide-react';

const services = [
    {
        title: 'Web Development',
        icon: <Globe size={40} />,
        description: 'Full-stack web applications built with modern technologies like React, Node.js, and Next.js.'
    },
    {
        title: 'UI/UX Design',
        icon: <Monitor size={40} />,
        description: 'Intuitive and visually striking interfaces designed for optimal user experience.'
    },
    {
        title: 'Mobile Apps',
        icon: <Smartphone size={40} />,
        description: 'Cross-platform mobile applications that perform seamlessly on iOS and Android.'
    }
];

const Services = () => {
    return (
        <section className={styles.services}>
            <h2 className={styles.title}>SERVICES</h2>
            <div className={styles.grid}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}
                    >
                        <div className={styles.icon}>{service.icon}</div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.description}>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
