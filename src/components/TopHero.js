import React from 'react';
import {Link} from 'react-router-dom';

function TopHero() {
    return (
        
            <section className=" w-full min-h-screen bg-[url('https://i.ibb.co/S3njgNM/bg.jpg')] bg-cover bg-no-repeat">
	<div className="container flex flex-col-reverse  justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left text-white">
			<h1 className="text-3xl font-bold sm:text-4xl">Welcome to <span className='text-yellow-300'>Pro Job</span></h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">We're a leading provider of IT services and solutions that help businesses thrive. Our team of experts is dedicated to keeping your technology running smoothly, so you can focus on growing your business.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link rel="noopener noreferrer" to='/about' className="px-8 py-3 text-lg font-semibold border rounded ">About</Link>
				<Link rel="noopener noreferrer" to='/contact-us' className="px-8 py-3 text-lg font-semibold border rounded ">Contact Us</Link>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://techfest.org/static/resources/workshops/pics/Web%20Dev.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        
    )
}

export default TopHero;