import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../store/auth'

const AdminLayout = () => {
  const {user,isLoading} = useAuth();

  if(isLoading){
    return <h1>loading....</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/"></Navigate>
  }
  return (
  <>
  <header className='m-5 p-5'>
    <div>
      <nav>
        <ul className='flex gap-10 text-blue-600 '>
          <li><Link to="/admin/users" className='hover:text-white' >Users</Link></li>
          <li><Link to="/admin/contacts" className='hover:text-white'>Contacts</Link></li>
          {/* <li><Link to="/admin/services"  className='hover:text-white'>Service</Link></li> */}
          <li><Link></Link></li>
          <li><Link></Link></li>
        </ul>
      </nav>
    </div>
  </header>
  <Outlet></Outlet>
  </>
    
  )
}

export default AdminLayout