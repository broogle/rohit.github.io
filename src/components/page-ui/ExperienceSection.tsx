'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience & Highlights
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'Software Engineer — Kiya.ai',
        description: (
            <ul className="list-disc">
                <li>Built and optimised Spring Boot microservices powering Kiya.ai&apos;s AML platform used by 200+ clients across 43 countries.</li>
                <li>Delivered REST APIs for suspicious transaction detection, watchlist screening, and regulatory case creation.</li>
                <li>Integrated services with SWIFT processing, adverse media scanning, and customer risk assessment modules.</li>
                <li>Implemented MySQL/PostgreSQL query tuning to accelerate insights across massive transaction datasets.</li>
                <li>Partnered with QA and compliance teams to meet global AML controls and deliver actionable alerts.</li>
            </ul>
        ),
        badge: 'Pune, India · Feb 2023 – Aug 2024'
    },
    {
        title: 'Trainee Software Engineer — Kiya.ai',
        description: (
            <ul className="list-disc">
                <li>Supported backend feature development for the AML platform with Spring Boot and MySQL.</li>
                <li>Built Angular UI components for case management and reporting with AI-assisted workflows.</li>
                <li>Integrated real-time monitoring and predictive analysis capabilities into customer journeys.</li>
                <li>Hardened the product through bug fixes, unit tests, and performance enhancements.</li>
                <li>Learned financial compliance workflows and industry-standard AML procedures firsthand.</li>
            </ul>
        ),
        badge: 'Pune, India · Jul 2022 – Jan 2023'
    },
    {
        title: 'Bentley iTwin4Good Developer Programme — Highly Commended',
        description: (
            <ul className="list-disc">
                <li>Recognised nationally for a tech-for-good solution showcased at Bentley Systems HQ in London.</li>
                <li>Presented impact, design decisions, and roadmap to senior leaders, mentors, and industry peers.</li>
            </ul>
        ),
        badge: 'London, UK · Jul 2025'
    },
    {
        title: 'AI Engine: Summer Hack 2025 — Moments AI',
        description: (
            <ul className="list-disc">
                <li>Co-built an AI platform generating personalised captions, summaries, and messages in a 48-hour sprint.</li>
                <li>Owned LLM integrations and demo deployment while coordinating feedback loops with mentors.</li>
            </ul>
        ),
        badge: 'London, UK · Aug 2025'
    },
    {
        title: 'MSc Cloud and Enterprise Computing — Nottingham Trent University',
        description: (
            <ul className="list-disc">
                <li>Coursework spans cloud-native architectures, distributed systems, AI services, and DevOps automation.</li>
            </ul>
        ),
        badge: 'Nottingham, UK · Oct 2024 – Oct 2025'
    },
    {
        title: 'B.E. Computer Engineering — Savitribai Phule Pune University',
        description: (
            <ul className="list-disc">
                <li>Graduated with a focus on software engineering fundamentals, data structures, and system design.</li>
            </ul>
        ),
        badge: 'Pune, India · Aug 2018 – May 2022'
    }
];
