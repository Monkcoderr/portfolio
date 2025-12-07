import React from 'react';
import styles from './Blog.module.css';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
    {
        title: 'Designing for Zero Gravity',
        date: '2023-10-15',
        excerpt: 'How to create floating interfaces that feel natural and intuitive.',
        link: '#'
    },
    {
        title: 'The Return of Pixel Art',
        date: '2023-09-28',
        excerpt: 'Why retro aesthetics are making a comeback in modern web design.',
        link: '#'
    },
    {
        title: 'Optimizing React for Space',
        date: '2023-08-10',
        excerpt: 'Performance tips for high-fidelity animations and 3D scenes.',
        link: '#'
    }
];

const Blog = () => {
    return (
        <section className={styles.blog}>
            <h2 className={styles.title}>LOG_ENTRIES</h2>
            <div className={styles.list}>
                {posts.map((post, index) => (
                    <motion.a
                        href={post.link}
                        key={index}
                        className={styles.item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                    >
                        <span className={styles.date}>{post.date}</span>
                        <div className={styles.content}>
                            <h3 className={styles.postTitle}>{post.title}</h3>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                        </div>
                        <ArrowRight className={styles.arrow} />
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Blog;
