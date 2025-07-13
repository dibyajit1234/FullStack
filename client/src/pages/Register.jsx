import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const Register = () => {
  const {isLoading}=useAuth()
  const [User, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });

  const {storeTokenInLS}=useAuth();
  const navigate = useNavigate();

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
    // alert(User); 
    console.log(User)
    try {
      const response =await fetch(`http://localhost:5000/api/auth/register`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(User),
    })
          const res_data = await response.json();
      console.log("response from server",res_data);
    if(response.ok){

      //store the token in localhost
      storeTokenInLS(res_data.token);
      
      setUser({
        username:"",
        email:"",
        phone:"",
        password:"",});
        toast.success(res_data.message)
        // if(isLoading){
        //   return <h1>loading.....</h1>
        // }
        navigate("/");

        window.location.reload();

    }else{
      toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
    }
      
    } catch (error) {
      console.log("register",error);
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
              <h1 className='text-4xl'>ragistration form</h1>
              <br />
              <form onSubmit={handelSubmit}>
                <div>
                  <label htmlFor="username">username: </label>
                  <input type="text" name='username' placeholder='username' required value={User.username} onChange={handelInput} />
                </div>

                <div>
                  <label htmlFor="email">email</label>
                  <input type="text" name='email' placeholder='email' required value={User.email} onChange={handelInput}/>
                </div>

                <div>
                  <label htmlFor="phone">phone</label>
                  <input type="number" name='phone' placeholder='phone' required autoComplete="off" value={User.phone} onChange={handelInput}/>
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

export default Register