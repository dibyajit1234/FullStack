import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AdminUserUpdate = (props) => {
    const location = useLocation();

    const {authorizationToken}=useAuth();
    const id = location.state?.id;
    const [User, setUser] = useState({
        username:'',
        email:'',
        phone:''
    });

    //getuserbyid
    const getuserbyid=async()=>{
        try {
            const response = await fetch(`https://first-mern-backend-3jkq.onrender.com/api/admin/user/${id}`,{
            method:"GET",
            headers:{
                Authorization:authorizationToken,

            }
        });
        const res_data = await response.json();
        if(response.ok){
            setUser(res_data);
            
        }
        } catch (error) {
            console.log(error);
            
        }
    }

    // console.log(user._id);
    const handelInput=(e)=>{
        // console.log(e);
        
      let name = e.target.name;
      let value = e.target.value;
      setUser({
        ...User,
        [name]:value,
      })
    }
    
    const handelSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`https://first-mern-backend-3jkq.onrender.com/api/admin/user/update/${id}`,{
            method:"PATCH",
            headers:{
                Authorization:authorizationToken,
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(User),
         });
        const data =await response.json();
        
        if(response.ok){
            toast.success(data.message);
        }else{
            toast.error(data.message);
        }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong")
            
        }
        
    }
    useEffect(() => {
      getuserbyid()
    }, [])
    

  return (
    <>
    <section className='m-5 p-5 grid gap-7'>
        <div>
            <h1 className='text-4xl'>Update user data</h1>
        </div>
        <form className='border border-white grid gap-7 p-5 w-1/2' onSubmit={handelSubmit}>
            <div className='grid gap-3'>
                <p className='text-xl'>Username :</p>
                <input name='username' placeholder='username' className='bg-gray-700 p-1 rounded w-full' type="text" value={User.username} onChange={handelInput}/>
            </div>
            <div className='grid gap-3'>
                <p className='text-xl'>Email</p>
                <input type="text" className='bg-gray-700 p-1 rounded w-full' name='email' placeholder='email' value={User.email} onChange={handelInput}/>
            </div>
            <div className='grid gap-3'>
                <p className='text-xl'>phone</p>
                <input type="text" className='bg-gray-700 p-1 rounded w-full' name='phone' placeholder='phone' value={User.phone} onChange={handelInput}/>
            </div>
            <div>
                <button type='submit' className='bg-blue-800 p-1.5 rounded-lg'>Update</button>
            </div>
        </form>
    </section>
    </>
  )
}

export default AdminUserUpdate
