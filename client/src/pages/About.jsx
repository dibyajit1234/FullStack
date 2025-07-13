import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'

const About = () => {
    const {user}=useAuth();
    
  return (
    <>
    <main className='m-5 p-5 gap-15'>
      <section className='flex justify-between gap-10'>
                <div className='w-1/2 p-5 grid rounded-2xl h-auto gap-10'>
                    <p className='text-2xl'>Welcome! {user ? `${user.username} to our website`:"to our Website"}</p>
                    <h1 className='text-5xl'>Why choose us !!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio amet assumenda blanditiis dolorem impedit numquam fuga repudiandae earum illo, dignissimos dolore perferendis fugiat labore nemo alias nostrum doloribus. Nesciunt!</p>
                    <div className='flex my-2 gap-3'>
                        <Link to="/contact">
                            <button className='bg-blue-800 p-1.5 rounded-lg border-2 border-blue-800 hover:border-white'>Connect now</button>
                        </Link>
                        <Link to="/service">
                            <button className='border-2 border-blue-800 p-1.5 rounded-lg hover:bg-blue-800'>Learn more</button>
                        </Link>
                    </div>
                </div>

                <div className='w-1/2 rounded-2xl'>
                    <img className='rounded-2xl' src="/images/anime-girl-white-hair-2k-wallpaper-uhdpaper.com-210@0@k.jpg"/>
                </div>
            </section>
    </main>
    </>
  )
}

export default About