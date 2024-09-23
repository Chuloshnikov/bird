'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const logos = [
    {
        url: '/assets/logo/logo-1.svg',
        alt: 'logo'
    },
    {
        url: '/assets/logo/logo-2.svg',
        alt: 'logo'
    },
    {
        url: '/assets/logo/logo-3.svg',
        alt: 'logo'
    },
    {
        url: '/assets/logo/logo-4.svg',
        alt: 'logo'
    },
    {
        url: '/assets/logo/logo-5.svg',
        alt: 'logo'
    },
    {
        url: '/assets/logo/logo-6.svg',
        alt: 'logo'
    },
    {
        url: '/assets/logo/logo-7.svg',
        alt: 'logo'
    },
    {
        url: '/assets/logo/logo-8.svg',
        alt: 'logo'
    },
    {
        url: '/assets/logo/logo-9.svg',
        alt: 'logo'
    },
    {
        url: '/assets/logo/logo-10.svg',
        alt: 'logo'
    },
    {
        url: '/assets/logo/logo-11.svg',
        alt: 'logo'
    },
    {
        url: '/assets/logo/logo-12.svg',
        alt: 'logo'
    },
    {
        url: '/assets/logo/logo-13.svg',
        alt: 'logo'
    },
];

const Carousel = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => prevIndex === logos.length - 1 ? 0 : prevIndex + 1)
        }, 5000);
        
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <section>
            <div className='items-center justify-center flex font-bold md:pb-10 px-10 bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent'>
                More then 100+ brands have built their business with Bird Software
            </div>
            <div className='grid grid-cols-3 p-4 md:flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
                <AnimatePresence
                custom={currentImageIndex}>
                    {logos.map((image, index) => (
                        <motion.div
                        className="flex items-center justify-center h-40 w-40"
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity : index === currentImageIndex ? 1 : 0.8,
                            scale : index === currentImageIndex ? 1.2 : 1,
                            transition: { duration: 0.5 },
                        }}
                        exit={{ opacity: 0 }}
                        custom={index}
                        transition={{ 
                            opacity: { duration: 0.5 },
                        }}
    
                        >
                            <Image
                            className='object-contain h-20 w-20 items-center justify-center flex mx-auto'
                            src={image.url}
                            alt={image.alt}
                            width={200}
                            height={200}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Carousel;