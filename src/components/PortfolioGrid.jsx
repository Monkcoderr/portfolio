import React from 'react';
import BentoLayout from './BentoLayout';
import BentoCard from './BentoCard';
import GithubChart from './GithubChart';
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    FileText,
    MapPin,
    Code2,
    Briefcase,
    FolderGit2,
    MessageSquare,
    PenTool,
    Download,
    ExternalLink
} from 'lucide-react';
import styles from './PortfolioGrid.module.css';

const PortfolioGrid = () => {
    return (
        <BentoLayout>
            {/* Row 1: Intro (2x2) + Experience (2x2) */}
            <BentoCard colSpan={2} rowSpan={2} title="About Me" className={styles.introCard}>
                <div className={styles.introContent}>
                    <div className={styles.introTop}>
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className={styles.avatar} />
                        <div>
                            <h1 className={styles.name}>[Name Placeholder]</h1>
                            <h2 className={styles.role}>Design Engineer</h2>
                        </div>
                    </div>
                    <p className={styles.bio}>
                        I build pixel-perfect, engaging, and accessible digital experiences.
                        Focused on React, Motion Design, and Performance.
                    </p>
                    <div className={styles.location}>
                        <MapPin size={16} /> Based in [Location]
                    </div>
                    {/* Consolidated Social & Resume Buttons */}
                    <div className={styles.socialRow}>
                        <a href="/resume.pdf" target="_blank" className={styles.miniBtn} title="Resume">
                            <Download size={18} /> Resume
                        </a>
                        <a href="https://twitter.com" target="_blank" className={styles.miniIconBtn} title="Twitter">
                            <Twitter size={18} />
                        </a>
                        <a href="https://github.com" target="_blank" className={styles.miniIconBtn} title="GitHub">
                            <Github size={18} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" className={styles.miniIconBtn} title="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:email@example.com" className={styles.miniIconBtn} title="Email">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </BentoCard>

            <BentoCard colSpan={2} rowSpan={2} title="Experience" icon={Briefcase}>
                <div className={styles.experienceList}>
                    <div className={styles.experienceItem}>
                        <div className={styles.year}>2023 - Present</div>
                        <div className={styles.jobRole}>Senior Front-end Engineer</div>
                        <div className={styles.company}>Tech Corp</div>
                    </div>
                    <div className={styles.experienceItem}>
                        <div className={styles.year}>2021 - 2023</div>
                        <div className={styles.jobRole}>Creative Developer</div>
                        <div className={styles.company}>Agency Inc</div>
                    </div>
                    <div className={styles.experienceItem}>
                        <div className={styles.year}>2019 - 2021</div>
                        <div className={styles.jobRole}>Web Designer</div>
                        <div className={styles.company}>Freelance</div>
                    </div>
                </div>
            </BentoCard>

            {/* Row 2: GitHub Chart (4x1) */}
            <BentoCard colSpan={4} title="Contributions" icon={Code2} className={styles.chartCard}>
                <GithubChart />
            </BentoCard>

            {/* Row 3: Projects (2x2) + Skills (2x1) + Testimonials/Blog (1x1) */}
            <BentoCard colSpan={2} rowSpan={2} title="Selected Projects" icon={FolderGit2}>
                <div className={styles.projectList}>
                    <div className={styles.projectItem}>
                        <div className={styles.projectHeader}>
                            <div className={styles.projectTitle}>Project Alpha</div>
                            <div className={styles.projectLinks}>
                                <a href="#" target="_blank" className={styles.projectLink} title="Live Demo"><ExternalLink size={14} /></a>
                                <a href="#" target="_blank" className={styles.projectLink} title="GitHub Repo"><Github size={14} /></a>
                            </div>
                        </div>
                        <div className={styles.projectDesc}>E-commerce dashboard with analytics</div>
                    </div>
                    <div className={styles.projectItem}>
                        <div className={styles.projectHeader}>
                            <div className={styles.projectTitle}>Neon Verse</div>
                            <div className={styles.projectLinks}>
                                <a href="#" target="_blank" className={styles.projectLink} title="Live Demo"><ExternalLink size={14} /></a>
                                <a href="#" target="_blank" className={styles.projectLink} title="GitHub Repo"><Github size={14} /></a>
                            </div>
                        </div>
                        <div className={styles.projectDesc}>3D Landing Page with Three.js</div>
                    </div>
                    <div className={styles.projectItem}>
                        <div className={styles.projectHeader}>
                            <div className={styles.projectTitle}>DataWiz</div>
                            <div className={styles.projectLinks}>
                                <a href="#" target="_blank" className={styles.projectLink} title="Live Demo"><ExternalLink size={14} /></a>
                                <a href="#" target="_blank" className={styles.projectLink} title="GitHub Repo"><Github size={14} /></a>
                            </div>
                        </div>
                        <div className={styles.projectDesc}>Real-time Analytics Platform</div>
                    </div>
                </div>
            </BentoCard>

            <BentoCard colSpan={2} title="Tech Stack" icon={Code2}>
                <div className={styles.skillList}>
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'Framer Motion', 'Three.js', 'Figma'].map(skill => (
                        <span key={skill} className={styles.skillBadge}>{skill}</span>
                    ))}
                </div>
            </BentoCard>

            <BentoCard title="Testimonials" icon={MessageSquare}>
                <div className={styles.testimonial}>
                    "An absolute wizard with React."
                </div>
            </BentoCard>

            <BentoCard title="Latest Thoughts" icon={PenTool}>
                <div className={styles.blogItem}>
                    <span className={styles.blogTitle}>The Future of UI</span>
                    <span className={styles.date}>Dec 08</span>
                </div>
            </BentoCard>

        </BentoLayout>
    );
};

export default PortfolioGrid;
