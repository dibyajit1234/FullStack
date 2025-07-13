import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import { useAuth } from '../store/auth'

const Navbar = () => {
    const {isLoggedIn,user,isLoading} = useAuth();
    // if(isLoading){
    //     return <h1>loading....</h1>
    // }
    // console.log(user.isAdmin);
    // console.log(isLoggedIn);
    
    
    
  return (
    <header>
        <div className=' flex p-5 rounded-2xl mx-10 my-5 text-blue-600 justify-between'>
            <div className='text-2xl'>
                <Link className='text-lg' to='/'>Nandi Enterprise</Link>
            </div>
            <nav className='justify-between gap-3'>
                <ul className='flex'>
                    <li><Link className='px-4 hover:text-xl hover:transition-all duration-300' to="/">Home</Link></li>
                    <li><Link className='px-4 hover:text-xl hover:transition-all duration-300' to="/about">About</Link></li>
                    <li><Link className='px-4 hover:text-xl hover:transition-all duration-300' to="/contact">Contact</Link></li>
                    <li><Link className='px-4 hover:text-xl hover:transition-all duration-300' to="/service">Service</Link></li>
                    {user.isAdmin && isLoggedIn ? <li><NavLink className='px-4 hover:text-xl hover:transition-all duration-300' to="/admin/users">Admin</NavLink></li>:<></>}
                    {isLoggedIn ? 
                    <li><Link className='px-4 hover:text-xl hover:transition-all duration-300' to="/logout">Logout</Link></li>
                    : <>
                     <li><Link className='px-4 hover:text-xl hover:transition-all duration-300' to="/register">Register</Link></li>
                    <li><Link className='px-4 hover:text-xl hover:transition-all duration-300' to="/login">Login</Link></li>
                    
                    </>
                    }
                   
                </ul>
                    
            </nav>
        </div>
    </header>
  )
}

export default Navbar