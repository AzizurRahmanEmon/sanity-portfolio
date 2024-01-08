import { ValidationError, useForm } from '@formspree/react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import * as dotenv from 'dotenv';
dotenv.config();
import React from 'react';
declare const process: {
  env: {
    FORMSPREE_FORM_ID: string;
  };
};
type Props = {};

const ContactMe = (props: Props) => {
  const formId: string = process.env.FORMSPREE_FORM_ID;

const [state, handleSubmit] = useForm(`${formId}`);
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px]">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center sm:mt-10">
          If you are interested about my skill. {' '}
          <span className="underline decoration-[#16a5e2]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#16a5e2] h-7 w-7 animate-pulse" />
            <p>01606072942</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#16a5e2] h-7 w-7 animate-pulse" />
            <p>azizur15-2533@diu.edu.bd</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#16a5e2] h-7 w-7 animate-pulse" />
            <p>Uttara,Dhaka,Bangladesh</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto" onSubmit={handleSubmit}>
        <div className="flex space-x-2">
          <input placeholder="Name" className="contactInput" type="text" name="name" />
          <ValidationError 
            prefix="Name" 
            field="text"
            errors={state.errors}
          />
          <input placeholder="Email" className="contactInput" type="email" name="_replyto" />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>

        <input placeholder="Subject" className="contactInput" type="text" name="subject" />
        <ValidationError 
          prefix="Subject" 
          field="text"
          errors={state.errors}
        />
        <textarea placeholder="Message" className="contactInput" name="message" />
        <ValidationError 
          prefix="Message" 
          field="textarea"
          errors={state.errors}
        />
        <button
          className="bg-[#16a5e2] px-10 py-5 rounded-md text-black font-bold text-lg"
          type="submit"
        >
          Submit
        </button>

        {state.succeeded && <p className="text-[#d6d6d8]">Thanks for contacting! Will reply soon...</p>}
      </form>
      </div>
    </div>
  );
};

export default ContactMe;
