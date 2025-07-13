import React from 'react'
import { useAuth } from '../store/auth'

const Service = () => {
  const {service}=useAuth();
  console.log(service);
  if (!Array.isArray(service)) {
    return <p className="text-center m-10">Loading services...</p>;
  }
  return (
    <>
    <section className='m-10 grid gap-10'>
      <div>
        <h1 className='text-5xl'>Services</h1>
      </div>

      <div className='grid grid-cols-3 gap-10'>
        {service.map((curElem,index)=>{
          const{price,description,provider,service} = curElem;
          return (
          <div className='bg-transparent border-2 border-blue-300 p-2 grid gap-3' key={index}>
            <div className='flex justify-center'>
                <img src="/images/anime-girl-white-hair-2k-wallpaper-uhdpaper.com-210@0@k.jpg" className='max-h-full'/>
              </div>
              <div className='grid grid-rows-3'>
                <div className='flex justify-start gap-10'>
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2 className=' text-2xl'>{service}</h2>
                <p>{description}</p>
            </div>
          </div>
          )
        })}
      </div>
    </section>
    </>
  )
}

export default Service