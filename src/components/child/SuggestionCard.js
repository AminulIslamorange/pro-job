import React, { useContext } from 'react';
import { CgOrganisation } from 'react-icons/cg';
import { GrLocation } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const SuggestionCard = ({job}) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleApply = (job) => {
        if (user == 'null') {
            navigate("/login");
            console.log('No User Found');
        }
        else{

            Swal.fire(
  'Good job!',
  `${user.displayName} successfully Aplied on ${job}`,
  'success'
)
        }
        
    }
    return (
        <div className='py-4 px-2 bg-white max-w-4xl mx-auto my-4 duration-700 rounded-md md:grid grid-cols-4  justify-between items-center shadow-sm hover:shadow-lg'>
            <div className='flex gap-2 items-center'>
           {
            job?.logo ?  <div className='w-12 h-12 overflow-hidden border rounded-full
            '>
                <img src={job?.logo}  alt=''/>
            </div> : ''
           }
            <h1 className='text-xl  font-bold text-gray-800'>{job?.position}</h1>
            </div>
            <h1 className='text-md font-bold text-gray-700 my-2'><GrLocation className='inline-block mr-1 text-green-500 text-md'/> {job?.location}</h1>
            <h1 className='text-lg font-bold my-2 text-gray-700'><CgOrganisation className='inline-block mr-1 text-green-500 text-md'/> {job?.company}</h1>
            <div className=' md:flex justify-end'>
            <button onClick={()=>handleApply(job?.position)} className='px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-green-500 duration-500 block w-24'>Apply </button>
            </div>
            
        </div>
    );
};

export default SuggestionCard;