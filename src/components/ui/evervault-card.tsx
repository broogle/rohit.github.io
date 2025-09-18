'use client';
import { useMotionValue } from 'framer-motion';
import { motion, useMotionTemplate } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

export const EvervaultCard = ({ text, icon, className }: { text?: string; icon?: React.ReactNode; className?: string }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [randomString, setRandomString] = useState('');

    useEffect(() => {
        const str = generateRandomString(1500);
        setRandomString(str);
    }, []);

    function onMouseMove({ currentTarget, clientX, clientY }: any) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        const str = generateRandomString(1500);
        setRandomString(str);
    }

    return (
        <div className={cn('p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative', className)}>
            <div
                onMouseMove={onMouseMove}
                className="group/card relative flex size-full items-center justify-center overflow-hidden rounded-3xl bg-transparent"
            >
                <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
                <div className="relative z-10 flex items-center justify-center">
                    <div className="relative flex size-44 flex-col items-center justify-center rounded-full text-white">
                        <div className="absolute size-full rounded-full bg-white/[0.85] blur-sm dark:bg-black/[0.85]" />
                        <span className="z-20 px-4 text-center text-base font-semibold text-black dark:text-white">{text}</span>
                        <div className="z-20 mt-3 flex w-full flex-col items-center px-4 text-center text-sm font-medium leading-relaxed text-neutral-700 dark:text-neutral-100">
                            {icon}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
    const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="pointer-events-none">
            <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
            <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  backdrop-blur-xl transition duration-500 group-hover/card:opacity-100"
                style={style}
            />
            <motion.div className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100" style={style}>
                <p className="absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs font-bold text-white transition duration-500">
                    {randomString}
                </p>
            </motion.div>
        </div>
    );
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const generateRandomString = (length: number) => {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
