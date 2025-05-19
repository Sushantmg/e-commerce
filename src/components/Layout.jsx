import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../pages/Footer';
export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">


            <Navbar />


            <Outlet />

            <Footer />


        </div>
    );
}
