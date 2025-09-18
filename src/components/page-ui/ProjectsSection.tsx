import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

export function ProjectsSection() {
    return (
        <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-16">
            <h2 className="mb-12 text-center text-2xl font-bold text-neutral-800 dark:text-neutral-100 md:text-4xl">Featured Projects</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
                    >
                        <div className="aspect-video overflow-hidden">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                width={400}
                                height={225}
                                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{project.title}</h3>
                            {project.description && <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{project.description}</p>}
                            {project.tech && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {project.url && (
                                <div className="mt-4">
                                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                        <Button size="sm">View Project</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

const projects = [
    {
        title: 'HireableDB — AI-Powered Hiring Database',
        thumbnail: '/projects/hireabledb.png',
        description: 'Auto-extract role, company, deadline, and track everything in one dashboard with AI-powered automation.',
        tech: ['Next.js', 'AI/ML', 'Database', 'SaaS'],
        url: 'https://hireabledb.com'
    },
    {
        title: 'TriggerLines — AI Motivational Generator',
        thumbnail: '/projects/triggerlines.png',
        description: 'AI-powered platform that generates personalized motivational content and triggers.',
        tech: ['AI/ML', 'React', 'Node.js', 'OpenAI'],
        url: 'https://trigger-lines.vercel.app/'
    },
    {
        title: 'Moments AI — Hackathon Demo',
        thumbnail: '/projects/moments.png',
        description: 'AI platform generating personalized captions, summaries, and messages in real-time.',
        tech: ['AI/ML', 'Python', 'FastAPI', 'LLM'],
        url: 'https://github.com/broogle/moments-ai'
    },
    {
        title: 'Distributed Cloud Storage System',
        thumbnail: '/projects/cloud.png',
        description: 'Scalable cloud storage solution with distributed architecture and fault tolerance.',
        tech: ['Java', 'Spring Boot', 'Microservices', 'Cloud']
    },
    {
        title: 'Emissions Reporting System',
        thumbnail: '/projects/emissions.png',
        description: 'Enterprise system for tracking and reporting carbon emissions across organizations.',
        tech: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Kubernetes']
    }
];
