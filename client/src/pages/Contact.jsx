import React from 'react'
import { useState } from 'react';
import { useAuth } from '../store/auth';

const Contact = () => {
  const [Contact, setContact] = useState({
        username:"",
        email:"",
        message:"",
      });

      const [Userdata, setUserdata] = useState(true);
      const {user} =useAuth();

      if(Userdata && user){
        
        setContact({
          username:user.username,
          email:user.email,
          message:""
        })
        setUserdata(false);
      }

      const handelInput=(e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setContact({
        ...Contact,
        [name]:value,
      })

    }
    const handelSubmit=async(e)=>{
      e.preventDefault(); 
      // alert(Contact); 
      // console.log(Contact)
      try {
        const response = await fetch(`http://localhost:5000/api/form/contact`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(Contact),
        })
        // console.log(response);
        if(response.ok){
          const res_data =await response.json();
          // console.log("res_data:",res_data);
          setContact({
            username:"",
            email:"",
            message:"",
          })
          alert(res_data.msg);
        }else{
          console.log(response)
        }
        
      } catch (error) {
        console.log("Contact :",error);
        
      }
    }


  return (
    <>
    <section>
      <main>
        <div>
          <div className='flex justify-around gap-10 m-8 p-10'>
            <div className='h-auto '>
              <img className='h-full rounded-2xl' src="/images/anime-girl-white-hair-2k-wallpaper-uhdpaper.com-210@0@k.jpg" width="500" height="500"/>
            </div>

            <div className=' p-5 w-1/3'>
              <h1 className='text-4xl'>Contact form</h1>
              <br />
              <form className='grid grid-rows-4 gap-6' onSubmit={handelSubmit}>
                <div className='grid grid-rows-2 gap-1'>
                  <label htmlFor="username">username</label>
                  <input className='bg-gray-800 p-1 rounded-lg' type="text" name='username' placeholder='username' required value={Contact.username} onChange={handelInput}/>
                </div>

                <div className='grid grid-rows-2 gap-1 '>
                  <label htmlFor="email">email</label>
                  <input className='bg-gray-800 p-1 rounded-lg' type="text" name='email' placeholder='email' required value={Contact.email} onChange={handelInput}/>
                </div>

                <div className='grid grid-rows-2 gap-1'>
                  <label htmlFor="message">message: </label>
                  <input className='bg-gray-800 p-1 rounded-lg' type="message" name='message' placeholder='message' required value={Contact.message} onChange={handelInput}/>
                </div>
                <div className='flex justify-center'>
                <button type='submit' className='bg-blue-800 h-1/2 w-1/2 rounded-xl items-center '>submit</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Contact