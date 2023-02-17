import React, { useState } from "react";
import Poster from "../UserTypes/Poster";
import Seeker from "../UserTypes/Seeker";


const JobTrogle = () => {
    const [toggle , setToggle] = useState('jobposter')
    
  
    return (
      <div className="w-full py-4">
        <div className="w-full flex gap-5 mb-3 justify-center">
            <button disabled={toggle === "jobseeker"} onClick={()=>setToggle('jobseeker')} className="btn btn-outline btn-warning">Job Seeker</button>
            <button disabled={toggle === "jobposter"} onClick={()=>setToggle('jobposter')} className="btn btn-outline btn-success">Job Poster</button>
        </div>
        <div>
            {
              toggle === 'jobposter' ? <Poster/> : <Seeker/>  
            }
        </div>

      
      </div>
    );
};

export default JobTrogle;
