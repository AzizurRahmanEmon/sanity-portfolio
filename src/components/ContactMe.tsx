import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}
type Props = {}

const ContactMe = (props: Props) => {
    const {register,handleSubmit} =useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          console.log('Email sent successfully');
        } else {
          const data = await response.json();
          console.error('Error sending email:', data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px]">
           Contact
        </h3>
        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
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
            onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button className='bg-[#16a5e2] px-10 py-5 rounded-md text-black font-bold text-lg' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe