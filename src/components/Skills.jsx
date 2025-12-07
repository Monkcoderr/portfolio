import React from 'react';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Terminal, Cpu } from 'lucide-react';

const skills = [
    { name: 'React', icon: <Code />, level: 90 },
    { name: 'Node.js', icon: <Server />, level: 85 },
    { name: 'CSS/Sass', icon: <Layout />, level: 95 },
    { name: 'SQL', icon: <Database />, level: 80 },
    { name: 'Git', icon: <Terminal />, level: 90 },
    { name: 'System Design', icon: <Cpu />, level: 75 },
];

const Skills = () => {
    return (
        <section id="skills" className={styles.skills}>
            <h2 className={styles.title}>SKILL_TREE</h2>
            <div className={styles.grid}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className={styles.card}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className={styles.icon}>{skill.icon}</div>
                        <h3 className={styles.skillName}>{skill.name}</h3>
                        <div className={styles.progressBar}>
                            <motion.div
                                className={styles.progressFill}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
