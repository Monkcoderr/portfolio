import React from 'react';
import styles from './GithubChart.module.css';
import { motion } from 'framer-motion';

const GithubChart = () => {
    // Generate fake contribution data
    const weeks = 52;
    const days = 7;
    const data = Array.from({ length: weeks * days }, () => Math.floor(Math.random() * 5));

    const getColor = (level) => {
        switch (level) {
            case 0: return 'var(--color-bg-alt)';
            case 1: return '#0e4429';
            case 2: return '#006d32';
            case 3: return '#26a641';
            case 4: return '#39d353';
            default: return 'var(--color-bg-alt)';
        }
    };

    return (
        <section className={styles.github}>
            <h2 className={styles.title}>GITHUB_ACTIVITY</h2>
            <div className={styles.terminal}>
                <div className={styles.header}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.terminalTitle}>user@portfolio:~/contributions</span>
                </div>
                <div className={styles.chartContainer}>
                    <div className={styles.chart}>
                        {data.map((level, index) => (
                            <motion.div
                                key={index}
                                className={styles.cell}
                                style={{ backgroundColor: getColor(level) }}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: index * 0.001 }}
                                whileHover={{ scale: 1.5, zIndex: 10 }}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.stats}>
                    <span>1,337 contributions in the last year</span>
                </div>
            </div>
        </section>
    );
};

export default GithubChart;
