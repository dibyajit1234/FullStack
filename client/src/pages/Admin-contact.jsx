import React, { useEffect,useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'

const AdminContact = () => {
  const {authorizationToken} = useAuth()
  const [contact, setcontact] = useState([])

  const getAllContacts=async()=>{
    const response = await fetch(`http://localhost:5000/api/admin/contact`,{
      method:"GET",
      headers:{
        Authorization:authorizationToken,
      }
    })
      const data =await response.json();
      // console.log(data);
      if(response.ok){
        setcontact(data)
      }
  }

  const deleteContactById = async(id)=>{
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contact/delete/${id}`,{
      method:"DELETE",
      headers:{
        Authorization:authorizationToken,
      }
    });
      const res_data= await response.json();
      if(response.ok){
        toast.success(res_data.message);
        getAllContacts();
      }else{
        toast.error(res_data.message)
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getAllContacts();

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
                <tr className='grid grid-cols-4 gap-10'>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Delete</th>

                </tr>
              </thead>
              <tbody className='grid gap-8'>
                {contact.map((curruser,index)=>{
                  return(
                    <tr key={index} className='grid grid-cols-4 gap-20 h-auto'>
                      <td className='flex justify-center'>{curruser.username}</td>
                      <td className='flex justify-center'>{curruser.email}</td>
                      <td className='flex justify-center items-center '>{curruser.message}</td>
                      <td className='flex justify-center'><button onClick={()=>{deleteContactById(curruser._id)}} className='bg-red-600 max-h-10 text-white rounded-lg p-2'>Delete</button></td>

                      
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

export default AdminContact