import React from 'react';
import SuggestionCard from '../child/SuggestionCard';
const jobs = [
    {
      position: 'Software Engineer',
      location: 'San Francisco, CA',
      company: 'Google',
     
    },
    {
      position: 'Data Scientist',
      location: 'New York, NY',
      company: 'Amazon',

    },
    {
      position: 'Product Manager',
      location: 'Seattle, WA',
      company: 'Microsoft',
   
    },
    {
      position: 'Data Manager',
      location: 'London, UK',
      company: 'Capgemini',
   
    },
    {
      position: 'Junior Advocate',
      location: 'Uttara, DKS',
      company: 'Accenture',
   
    },
    {
      position: 'Care Assitent',
      location: 'Patttar, Ukrane',
      company: 'Medisoft',
   
    },
  ];
const FresherJobs = () => {
    return (
        <div className='w-full min-h-[60vh] bg-[#f8f9fa] py-3'>
            <div className='max-w-4xl mx-auto'>
            <h2 className='text-2xl font-bold text-blue-600 '>Fresher Jobs</h2>
            
            <div className=''>
            {
                jobs?.map(job => <SuggestionCard key={job.position} job={job}/>)
            }
                <button className='px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-green-500 duration-500  '>Show All</button>
            </div>
            </div>     
        </div>
    );
};

export default FresherJobs;