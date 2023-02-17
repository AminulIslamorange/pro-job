
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser,setUser,providerLogin}=useContext(AuthContext);
    const googleProvider =new GoogleAuthProvider();
    const navigate=useNavigate();

  
  const handleRegister =(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    createUser(email,password)
    .then(result=>{
        const user=result.user;
        setUser (user);
        form.reset();
        navigate('/');
    })
    .catch(error=>console.error(error));
   
    }

    const handleGogleRegister =()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user=result.user;
            setUser(user);
            navigate('/');
        })
        .catch(error=>console.error(error));
    


    }




    return (
        <div className='h-[800px] flex justify-center items-center bg-blue-500'>
            <div>
                <img src='https://img.freepik.com/free-photo/register-now-document-filling-form-concept_53876-125596.jpg?w=740&t=st=1676613997~exp=1676614597~hmac=6701349601d1c47730c8746db782156d9570bc29fbb86b5ef578066a5a5d5f54' alt='' className='pt-20 pb-10 rounded-2xl' style={{width:'70%',}}/>
            </div>
            <div><div className='w-96 p-7'>
            <h2 className='text-xl text-center text-accent font-extrabold'>Register</h2>
            <form  onSubmit={handleRegister}>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>  </label>


                    <input className="input input-bordered w-full max-w-xs" name='email' required/>

                   


                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span>  </label>



                    <input  className="input input-bordered w-full  max-w-xs" type='password' name='password'required />
                    <label className="label"> <span className="label-text">Forget Password?</span>  </label>
                    


                </div>



                <input type="submit" value='Register' className='btn btn-accent w-full' />
                <div>
                   
                </div>
            </form>
            <p>Have an account?<Link className='text-primary' to='/login'>Please Login</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGogleRegister} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div></div>
        
    );
};

export default Register;