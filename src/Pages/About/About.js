import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <section className=" w-full min-h-screen bg-[url('https://i.ibb.co/S3njgNM/bg.jpg')] bg-cover bg-no-repeat">
            <div className="container flex flex-col-reverse  justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://miro.medium.com/max/1400/1*f3Jrn27ggVFkwy9fw_ExOg.jpeg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left text-white">
                    <h1 className="text-3xl font-bold sm:text-4xl">About Our <span className='text-yellow-300'>Pro Job</span></h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">We Are The Job Portal Agency
                        On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link rel="noopener noreferrer" to='/about' className="px-8 py-3 text-lg font-semibold border rounded ">About</Link>
                        <Link rel="noopener noreferrer" to='/contact-us' className="px-8 py-3 text-lg font-semibold border rounded ">Contact Us</Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;