import React from 'react';

const Seeker = () => {
    return (
        <div className='md:flex  items-center justify-center md:space-x-4 ml-12  rounded-md py-4 duration-500 ease-linear translate-x-1'>
            <div className='w-full min-w-xs max-w-xs'>
            <select className="select select-primary w-full  max-w-xs">
                <option disabled selected>Job-Category</option>
                <option>Web Design</option>
                <option>Web Design & Development</option>
                <option>Grapics Design</option>
                <option>Degital Marketing</option>
                <option>Blockchain Development</option>
            </select>
            </div>
            <div className='w-full min-w-xs max-w-xs'>
            <select className="select select-primary w-full  max-w-xs">
                <option disabled selected>Category</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Frelace</option>
                <option>Internship</option>
                <option>Temporary</option>
            </select>
            </div>
            <div className='w-full  md:flex  gap-2'>
            <input type="text" placeholder="Location" className="input input-bordered input-primary w-full max-w-xs " />
            <button className="btn btn-outline btn-primary">Search</button>

            </div>

        </div>
    );
};

export default Seeker;