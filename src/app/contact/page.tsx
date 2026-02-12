'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import ContactForm from '@/components/contactform';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[80vh] grid lg:grid-cols-2">
                {/* Left Content */}
                <div className="flex items-center bg-[#f7f7f7] dark:from-slate-900 dark:via-slate-900 dark:to-red-950 px-6 py-24">
                    <div className="max-w-xl mx-auto">
                        <h1 className="text-4xl sm:text-7xl font-thin-100 text-slate-900 dark:text-white mb-6">
                            Contact Us
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Ready to transform your business with AI? Get in touch with our
                            team of experts and let’s build something impactful together.
                        </p>
                    </div>
                </div>

                {/* Right Full-Height Image */}
                <div className="relative hidden lg:block">
                    <div
                        className="absolute inset-0 bg-[url('/contactus.png')] bg-cover bg-center bg-no-repeat"
                        aria-hidden="true"
                    />
                </div>
            </section>


            {/* Contact Section */}
            <section className="py-20 bg-white dark:bg-slate-900">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        <ContactForm />

                        {/* Contact Information */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-7xl font-thin-100 text-slate-900 dark:text-white mb-6">
                                    Get in touch
                                </h2>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
                                    Have a question or want to discuss a project? We'd love to hear from you.
                                    Fill out the form or reach out using the contact details below.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="group flex items-start space-x-4 p-4 ">
                                    <div className="w-12 h-12 dark:bg-red-950 rounded-xl flex items-center justify-center text-red-600 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">
                                            Email
                                        </h3>
                                        <div className="space-y-1">
                                            <a href="mailto:info@tecverse.io" className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors block">
                                                info@tecverse.io
                                            </a>
                                            <a href="mailto:sales@tecverse.ai" className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors block">
                                                sales@tecverse.ai
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group flex items-start space-x-4 p-4 ">
                                    <div className="w-12 h-12 dark:bg-red-950 rounded-xl flex items-center justify-center text-red-600 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">
                                            Phone
                                        </h3>
                                        <div className="space-y-1">
                                            <a href="tel:+15551234567" className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors block">
                                                +1 (555) 123-4567
                                            </a>
                                            <a href="tel:+15559876543" className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors block">
                                                +1 (555) 987-6543
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Offices Section */}
                                <div className="space-y-8">

                                    {/* India Office */}
                                    <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300">

                                        <div className="w-12 h-12 bg-red-50 dark:bg-red-950 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">
                                                Tecverse India Office
                                            </h3>

                                            <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                <p>B 202, Delta Seacon</p>
                                                <p>Road No. 11, Banjara Hills</p>
                                                <p>Hyderabad, Telangana 500034, India</p>

                                                <a
                                                    href="https://www.google.com/maps/search/B+202,+Delta+Seacon,+Banjara+Hills+Road+11+Hyderabad+500034"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center mt-3 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                                                >
                                                    <span className="mr-1">View on map</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* US Office */}
                                    <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300">

                                        <div className="w-12 h-12 bg-red-50 dark:bg-red-950 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">
                                                Tecverse USA Office
                                            </h3>

                                            <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                <p>North Nordica, Ave, Niles-IL</p>
                                                <p>United States 60714</p>
                                                <p>+1 708 328 8306</p>

                                                <a
                                                    href="https://www.google.com/maps?ll=42.017081,-87.798488&z=15&t=m&hl=en&gl=IN&mapclient=embed&q=N+Nordica+Ave+Niles,+IL+60714+USA"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center mt-3 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                                                >
                                                    <span className="mr-1">View on map</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* US Office */}
                                    <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300">

                                        <div className="w-12 h-12 bg-red-50 dark:bg-red-950 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">
                                                Tecverse Australia Headquarters                                            </h3>

                                            <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                <p>Melbourne, 3000 (Remote)</p>
                                                <p>0468887864</p>
                                                <p>Australia</p>

                                                <a
                                                    href="https://www.google.com/maps?ll=-37.816029,144.957251&z=12&t=m&hl=en-US&gl=US&mapclient=embed&q=Bourke+St+Melbourne+VIC+Australia"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center mt-3 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                                                >
                                                    <span className="mr-1">View on map</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>

                            {/* Social Media Links */}
                            {/* <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                                <h3 className="font-thin-100 text-slate-900 dark:text-white mb-4 text-lg">
                                    Follow us
                                </h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/company/tecverseio/?originalSubdomain=au" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                                        </svg>
                                    </a>
                                </div>
                            </div> */}
                            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">

                                <h3 className="text-slate-900 dark:text-white mb-4 text-lg font-semibold">
                                    Follow us
                                </h3>

                                <div className="flex">
                                    <a
                                        href="https://www.linkedin.com/company/tecverseio/?originalSubdomain=au"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-3 px-4 py-2 rounded-xl dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover: hover:text-[#0077B5] transition-all duration-300"
                                    >

                                        {/* LinkedIn SVG */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>

                                        <span className="font-medium">LinkedIn</span>
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>
                </Container>
            </section>
        </>
    );
}
