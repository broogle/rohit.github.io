'use client';

import Link from 'next/link';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

const words = [
    {
        text: 'Java'
    },
    {
        text: '&'
    },
    {
        text: 'Cloud-Native'
    },
    {
        text: 'Backend'
    },
    {
        text: 'Developer',
        className: 'text-blue-500 dark:text-blue-500'
    }
];

export function LandingPage() {
    const fullKeywords = 'Java · Spring Boot · Microservices · Docker · Kubernetes · Cloud';

    return (
        <div
            id="landing-page"
            className="bg- relative flex  h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
        >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />
            <p className="z-30 text-xs text-neutral-600 dark:text-neutral-200 sm:text-base">Hello, I&apos;m Rohit Ushir.</p>
            <TypewriterEffectSmooth words={words} />
            <div className="z-30 max-w-2xl px-6 text-center text-sm text-neutral-700 dark:text-neutral-100 md:text-lg">
                <p>Cloud & Enterprise Computing MSc | Experienced in building scalable backend services, APIs, and cloud-native applications</p>
            </div>
            <div className="z-30 mt-2 w-full overflow-hidden">
                <div className="pointer-events-none mx-auto max-w-xl">
                    <div className="relative overflow-hidden">
                        <div className="scroll-row whitespace-nowrap text-center text-xs text-neutral-500 dark:text-neutral-400 sm:text-sm">
                            <span className="inline-block px-2">{fullKeywords}</span>
                            <span className="inline-block px-2" aria-hidden>
                                {fullKeywords}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes scrollX {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .scroll-row {
                    display: inline-block;
                    animation: scrollX 22s linear infinite;
                }
            `}</style>
            {/* Contact links removed as requested */}
            <div className="z-30 flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <Link href="https://www.linkedin.com/in/rohitushir" target="_blank" rel="noopener noreferrer">
                    <Button>LinkedIn</Button>
                </Link>
                <Link href="https://github.com/broogle" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">GitHub</Button>
                </Link>
            </div>
            <BackgroundBeams />
        </div>
    );
}
