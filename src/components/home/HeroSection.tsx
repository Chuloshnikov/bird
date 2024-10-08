import React from 'react'
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section className='md:py-20 py-10 bg-gradient-to-r from-gray-300 to-white space-10'>
        <div className='container mx-auto text-center'>
            <h1 className='text-6xl flex justify-center font-bold md:px-20 pb-10  text-gradient bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent'>
                Build a brand and start selling in seconds
            </h1>
            <p className="text-lg md:text-xl md-10 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent font-bold">
                No matter what you sell,
                Bird Software has everything you need to run your online store.
            </p>
            <div className='flex gap-4 justify-center pt-10'>
                <Button
                className="text-md bg-blue-500">
                    Get Started
                </Button>
                <Button className='bg-gray-600 text-white'>
                    Learn More
                </Button>
            </div>
            <div className="pt-10">
                <video className="rounded-xl" autoPlay muted loop>
                    <source src="/content/hero-1.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    </section>
  )
}

export default HeroSection;