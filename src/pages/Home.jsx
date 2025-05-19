import React from 'react';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import AD from '../components/Home/AD';
import Categories from '../components/Home/Categories';
import Products from './Products';
import Footer from './Footer';
export default function Home() {
    return (
        <main className="w-full relative overflow-hidden dark:bg-gray-900">
            <Hero />

            {/* Features floats over the bottom of Hero and top of AD */}
            <div className="-mt-20 relative z-20 px-4 md:px-8 ">
                <Features />
            </div>

            {/* AD connects directly under Features (which overlaps both) */}
            <div className="-mt-12 relative z-10">
                <AD />
            </div>





        </main>
    );
}
