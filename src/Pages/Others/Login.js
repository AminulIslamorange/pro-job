
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {signIn,setUser,providerLogin}=useContext(AuthContext);
    const googleProvider =new GoogleAuthProvider();
    const navigate=useNavigate();
    


    const handleLogInEmailPassword =(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
            const user=result.user;
          setUser(user);
          form.reset();
          navigate('/');
        })
        .catch(error=>console.error(error));
       
       

    }
    const handleGogleSignUp =()=>{
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
            <img src='https://img.freepik.com/premium-photo/midsection-woman-showing-digital-tablet-with-signup-screen_1134-39725.jpg?w=900'className='pt-20 pb-10 rounded-2xl' style={{width:'80%',}} alt=''/>
        </div>
        <div><div className='w-96 p-7'>
        <h2 className='text-xl text-center text-accent font-extrabold'>Login</h2>
        <form onSubmit={handleLogInEmailPassword}>


            <div className="form-control w-full max-w-xs">
                <label className="label" >
                    <span className="label-text" >Email</span>  </label>


                <input className="input input-bordered w-full max-w-xs" name='email'/>

               


            </div>
            <div className="form-control w-full max-w-xs" name='password'>
                <label className="label"> <span  className="label-text" >Password</span>  </label>



                <input  className="input input-bordered w-full  max-w-xs" type='password'name='password' />
                <label className="label"> <span className="label-text">Forget Password?</span>  </label>
                


            </div>



            <input type="submit" value='Login' className='btn btn-accent w-full' />
            <div>
               
            </div>
        </form>
        <p>New to Job Pro?<Link className='text-primary' to='/register'>Please Register</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGogleSignUp} className='btn btn-outline w-full' >CONTINUE WITH GOOGLE</button>
    </div>
</div>
</div>
    );
};

export default Login;