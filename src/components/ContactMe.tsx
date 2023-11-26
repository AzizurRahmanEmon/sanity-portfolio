import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import React from 'react'
type Props = {}

const ContactMe = (props: Props) => {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px]">
           Contact
        </h3>
        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center sm:mt-10">
                If you are interested about my skill. {" "}
                <span className="underline decoration-[#16a5e2]/50">Lets Talk.</span>
            </h4>
            <div className='space-y-10'>
                <div className="flex items-center space-x-5">
                  <PhoneIcon className='text-[#16a5e2] h-7 w-7 animate-pulse'/>  
                  <p>01606072942</p>
                </div>
                <div className="flex items-center space-x-5">
                  <EnvelopeIcon className='text-[#16a5e2] h-7 w-7 animate-pulse'/>  
                  <p>azizur15-2533@diu.edu.bd</p>
                </div>
                <div className="flex items-center space-x-5">
                  <MapPinIcon className='text-[#16a5e2] h-7 w-7 animate-pulse'/>  
                  <p>Uttara,Dhaka,Bangladesh</p>
                </div>
            </div>
            <form 
            className='flex flex-col space-y-2 w-fit mx-auto'
            >
                <div className='flex space-x-2'>
                    <input placeholder='Name' className='contactInput' type="text" />
                    <input placeholder='Email' className='contactInput' type="email" />
                </div>
                <input placeholder='Subject' className='contactInput' type="text" />
                <textarea placeholder='Message' className='contactInput'/>
                <button className='bg-[#16a5e2] px-10 py-5 rounded-md text-black font-bold text-lg' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe