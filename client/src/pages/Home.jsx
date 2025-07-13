import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Home =()=>{
    const {isLoading}=useAuth();
    return(
        <>
        <main className='m-5 p-5 grid gap-15'>
            <section className='flex justify-between gap-10'>
                <div className='w-1/2 p-5 grid rounded-2xl h-auto gap-10'>
                    <p>This the best website the world has seen till now</p>
                    <h1 className='text-5xl'>Welcome to Lorem ipsum dolor sit amet.</h1>
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
            <div className='grid grid-cols-4 justify-evenly rounded-xl bg-amber-50 text-black p-5'>
                <div className='flex justify-center items-center border-r'>
                    <div>
                        <h1 className='text-3xl'>50+</h1>
                        <p>Regestered companies</p>
                    </div>
                </div>
                <div className='flex justify-center items-center border-r'>
                    <div>
                        <h1 className='text-4xl'>100,00+</h1>
                        <p>Happy clients</p>
                    </div>
                </div>
                <div className='flex justify-center items-center border-r'>
                    <div>
                        <h1 className='text-4xl'>500+</h1>
                        <p>Well khown developers</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <h1 className='text-4xl'>24/7</h1>
                        <p>Service</p>
                    </div>
                </div>
            </div>
            <section className='flex  justify-around gap-10'>
                <div className='w-full'>
                    <img className='rounded-2xl ' src="/images/anime-girl-white-hair-2k-wallpaper-uhdpaper.com-210@0@k.jpg"/>
                </div>
                <div className='grid grid-rows-6 h-auto'>
                    
                        <p className='items-center flex'>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sunt ratione animi facere numquam dolorem officia neque ut quidem aliquam.</p>
                        <div className='flex my-2 gap-3'>
                            <Link to="/contact">
                                <button className='bg-blue-800 p-1.5 rounded-lg border-2 border-blue-800 hover:border-white'>Connect now</button>
                            </Link>
                            <Link to="/service">
                                <button className='border-2 border-blue-800 p-1.5 rounded-lg hover:bg-blue-800'>Learn more</button>
                            </Link>
                        </div>
                </div>
            </section>
        </main>
        </>
    )
}
export default Home  