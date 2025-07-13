import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const Login = () => {
    const [User, setUser] = useState({
      email:"",
      password:"",
    });
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

  
    const handelInput=(e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setUser({
        ...User,
        [name]:value,
      })
    }

    const handelSubmit= async(e)=>{
    e.preventDefault(); 
    // console.log(User)
    try {
      const response =await fetch(`http://localhost:5000/api/auth/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(User),
    })
    const res_data = await response.json();
    // console.log("response data",res_data);
    // console.log(res_data.message);
    if(response.ok){
      
      storeTokenInLS(res_data.token);
      
      setUser({
        email:"",
        password:"",});
        toast.success(res_data.message); 
        
        navigate("/");
        window.location.reload();
    } else{
      toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
    }
      
    } catch (error) {
      console.log("login",error);
    }
    
    
    
  }
  return (
    <>
    <section>
      <main>
        <div>
          <div className='flex justify-between m-5 p-5'>
            <div className='h-auto '>
              <img src="/images/anime-girl-white-hair-2k-wallpaper-uhdpaper.com-210@0@k.jpg" width="500" height="500"/>
            </div>

            <div className='h-auto p-5 '>
              <h1 className='text-4xl'>Login form</h1>
              <br />
              <form onSubmit={handelSubmit}>

                <div>
                  <label htmlFor="email">email</label>
                  <input type="text" name='email' placeholder='email' required value={User.email} onChange={handelInput}/>
                </div>

                <div>
                  <label htmlFor="password">password: </label>
                  <input type="password" name='password' placeholder='password' required value={User.password} onChange={handelInput}/>
                </div>
                <br />
                <button type='submit' className='bg-blue-800 p-2 rounded-2xl '>submit</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Login