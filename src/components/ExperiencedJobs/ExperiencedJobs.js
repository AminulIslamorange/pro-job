import React from 'react';
import SuggestionCard from '../child/SuggestionCard';
const jobs = [
    {
      position: 'Software Engineer',
      location: 'San Francisco, CA',
      company: 'Google',
      logo: 'https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA'
    },
    {
      position: 'Data Scientist',
      location: 'New York, NY',
      company: 'Amazon',
      logo: 'https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg'
    },
    {
      position: 'Product Manager',
      location: 'Seattle, WA',
      company: 'Microsoft',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlJ6No3s5MBB3r7JyNzE7_fIR_24RYS_FcXC8qoiL4lvtuSghgUzYC7jBmGflwLWTfZg&usqp=CAU'
    },
    {
      position: 'Product Manager',
      location: 'Ukrane, PKA',
      company: 'Pro It',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb0nABg9x3ipBPRtFHEfxnWA8qfm5s-cMeWz2qSmE2o2ZvBldS-Cd6zBXj9oYoiZUksgA&usqp=CAU'
    },
    {
      position: 'Developer Assistant',
      location: 'Ukrane, PKA',
      company: 'Pro It',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb0nABg9x3ipBPRtFHEfxnWA8qfm5s-cMeWz2qSmE2o2ZvBldS-Cd6zBXj9oYoiZUksgA&usqp=CAU'
    },
    {
      position: 'Error Solver',
      location: 'Dhaka,Bangladesh',
      company: 'Hero Indea LTD',
      logo: 'https://png.pngtree.com/template/20191017/ourlarge/pngtree-company-h-letter-logo-vector-image_320362.jpg'
    },
  ];
const ExperiencedJobs = () => {
    return (
        <div className='w-full min-h-[60vh] bg-blue-50 py-3'>
        <div className='max-w-4xl mx-auto'>
        <h2 className='text-2xl font-bold text-blue-600 '>Experienced Jobs</h2>
        
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

export default ExperiencedJobs;