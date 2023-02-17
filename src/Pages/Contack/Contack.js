import React from 'react';

const Contack = () => {
    return (
       
        <div className=" w-full min-h-screen bg-[url('https://i.ibb.co/S3njgNM/bg.jpg')] bg-cover bg-no-repeat">
        <div className='pt-20 text-white'>
            <h1 className='text-center text-5xl'>Contact Us</h1>
            <h1 className='text-3xl mb-5 ml-14'>Contact Information</h1>
            <div className='flex justify-around flex-wrap' >
             
            <p>Address: 198 West 21th Street,<br/> Suite 721 New York NY 10016</p>
            <p>Phone: + 880 1727 3024 86</p>
            <p>Email: info@yoursite.com</p>
            <p>Website: yoursite.com</p></div>
        </div>
       <section className=" w-full min-h-screen bg-[url('https://i.ibb.co/S3njgNM/bg.jpg')] bg-cover bg-no-repeat">
       <div className="container flex flex-col-reverse  justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
           <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
               <img src="https://burst.shopifycdn.com/photos/contact-us-lettering.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
           </div>
           <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left text-white">
               <h1 className="text-3xl font-bold sm:text-4xl">Contact <span className='text-yellow-300'>Pro Job</span></h1>
              <div className='py-9'> 
                <input type="text" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs my-2" />
               <input type="text" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs my-2" />
               <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full max-w-xs" />
               <textarea className="textarea textarea-primary  my-2 w-full max-w-xs" placeholder="Message"></textarea><br/>
               <button className="btn btn-outline btn-warning px-14">Send Message</button>
               </div>
               
           </div>

       </div>
   </section>
   </div>
    );
};

export default Contack;