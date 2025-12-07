import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'NEBULA_OS',
        description: 'A web-based operating system with a retro-futuristic interface.',
        tags: ['React', 'TypeScript', 'Styled Components'],
        image: 'https://placehold.co/600x400/1a1a2e/e0e0e0?text=NEBULA_OS',
        demo: '#',
        repo: '#',
    },
    {
        title: 'VOID_CHAT',
        description: 'Real-time encrypted messaging app for the decentralized web.',
        tags: ['Node.js', 'Socket.io', 'Redis'],
        image: 'https://placehold.co/600x400/0a0a12/e0e0e0?text=VOID_CHAT',
        demo: '#',
        repo: '#',
    },
    {
        title: 'ASTRO_DASH',
        description: 'Data visualization dashboard for space mission telemetry.',
        tags: ['D3.js', 'Vue', 'Firebase'],
        image: 'https://placehold.co/600x400/050505/e0e0e0?text=ASTRO_DASH',
        demo: '#',
        repo: '#',
    },
];

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <h2 className={styles.title}>PROJECTS</h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className={styles.imageContainer}>
                            <img src={project.image} alt={project.title} className={styles.image} />
                            <div className={styles.overlay}>
                                <a href={project.demo} className={styles.link}><ExternalLink /> Demo</a>
                                <a href={project.repo} className={styles.link}><Github /> Code</a>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
