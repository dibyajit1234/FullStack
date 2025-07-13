import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AdminUser = () => {
  const {authorizationToken} = useAuth()
  const [Users, setUsers] = useState([])

  const getAllUsers=async()=>{
    try {
      const response =await fetch("http://localhost:5000/api/admin/user",{
      method:"GET",
      headers:{
        Authorization: authorizationToken
      }
    });
    const data =await response.json();
    setUsers(data)
    // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  const deleteUser=async(id)=>{
    try {
      const response = await fetch(`http://localhost:5000/api/admin/user/delete/${id}`,{
      method:"DELETE",
      headers:{
        Authorization:authorizationToken
      }
    })
    const data =await response.json();
    console.log(response);
    if(response.ok){
    toast.success(data.message)

      getAllUsers();
    }else{
      toast.error(data.message)
    }
      
    } catch (error) {
      console.log(error);
      
    }
    


  }

  useEffect(() => {
    getAllUsers();
  }, [])
  
  return (
    <>
    <section className='ml-9 mr-9 grid justify-center gap-5'>
      <div>
        <h1 className='text-5xl'>Admin users data</h1>
      </div>
      <div className='bg-white text-black m-3 p-8 rounded-2xl'>
        <table className='grid gap-5 ' > 
          <thead className='p-2 border-b-2 border-black'>
            <tr className='grid grid-cols-5 gap-10'>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Updata</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className='grid gap-8'>
            {Users.map((curruser,index)=>{
              return(
                <tr key={index} className='grid grid-cols-5 gap-10'>
                  <td className='flex justify-center'>{curruser.username}</td>
                  <td className='flex justify-center'>{curruser.email}</td>
                  <td className='flex justify-center'>{curruser.phone}</td>
                  <td className='flex justify-center'><Link className='bg-green-500 text-white rounded-lg p-2' state={{id:curruser._id}} to={`/admin/user/${curruser._id}/edit`} >Update</Link></td>
                  <td className='flex justify-center'><button className='bg-red-500 text-white rounded-lg p-2' onClick={()=>{deleteUser(curruser._id)}}>Delete</button></td>
                </tr>
      )
    })}
          </tbody>
        </table>
      </div>
    </section>
    
    </>
  )
}

export default AdminUser