import React from 'react';
import styles from './BentoLayout.module.css';
import { motion } from 'framer-motion';

const BentoLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.grid}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default BentoLayout;
