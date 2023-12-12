import React from 'react';
import Button from './Button';
import Navbar from './Navbar';
import Image from 'next/image';
import ImageTest from '../../public/images/desert.jpg'

const LoginScreen: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center relative">
    {/* Use Next.js Image component for background image */}
    <Image
      src={ImageTest}
      alt="Background Image"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
       <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-3/4 relative z-10">
          <form 
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
          className="bg-snow p-10 rounded-lg shadow-lg min-w-full">
            <h1 className="text-center text-2xl mb-6 font-bold">Form register</h1>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">Username</label>
              <input
                className="w-full px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">Password</label>
              <input
                className="w-full px-4 py-2 rounded-lg focus:outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-row justify-center gap-8 py-5">
              <Button label="Register" colour="yellow" large />
              <Button label="Login" colour="yellow" large />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;