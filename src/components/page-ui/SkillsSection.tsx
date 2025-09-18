import Link from 'next/link';
import React from 'react';
import { FaCode, FaReact } from 'react-icons/fa';
import { FiCloud } from 'react-icons/fi';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { LuDatabase } from 'react-icons/lu';
import { SiAngular, SiDocker, SiGit, SiSpringboot } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import { EvervaultCard, Icon } from '@/components/ui/evervault-card';

export function SkillsSection() {
    return (
        <div className="mx-auto max-w-5xl px-8 pb-8">
            <h1 id="skills" className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Skills
            </h1>
            <div className={'grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-3'}>
                {skills.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.link}
                        className="relative mx-auto flex h-52 w-full max-w-full flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]"
                    >
                        <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" />
                        <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" />
                        <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" />
                        <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" />

                        <EvervaultCard text={item.title} icon={item.icon} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

const skills = [
    {
        title: 'Programming Languages',
        link: 'https://www.java.com/',
        icon: (
            <div className="flex flex-col items-center gap-2">
                <FaCode className="text-3xl" />
                <span>Java · Python · Go · JavaScript</span>
            </div>
        )
    },
    {
        title: 'Frameworks & UI',
        link: 'https://spring.io/projects/spring-boot',
        icon: (
            <div className="flex flex-col items-center gap-2">
                <div className="flex flex-wrap justify-center gap-3 text-2xl">
                    <SiSpringboot />
                    <FaReact />
                    <TbBrandNextjs />
                    <SiAngular />
                </div>
                <span>Spring Boot · React · Next.js · Angular</span>
            </div>
        )
    },
    {
        title: 'Cloud & DevOps',
        link: 'https://www.docker.com/',
        icon: (
            <div className="flex flex-col items-center gap-2">
                <div className="flex flex-wrap justify-center gap-3 text-2xl">
                    <FiCloud />
                    <SiDocker />
                    <SiGit />
                </div>
                <span>Cloud Platforms · Docker · Git · Maven</span>
            </div>
        )
    },
    {
        title: 'Data & Storage',
        link: 'https://www.postgresql.org/',
        icon: (
            <div className="flex flex-col items-center gap-2">
                <LuDatabase className="text-3xl" />
                <span>MySQL · PostgreSQL · SQLite</span>
            </div>
        )
    },
    {
        title: 'Intelligent Solutions',
        link: 'https://openai.com/',
        icon: (
            <div className="flex flex-col items-center gap-2">
                <GiArtificialIntelligence className="text-3xl" />
                <span>LLMs · AI-powered automation · RESTful APIs</span>
            </div>
        )
    }
];
