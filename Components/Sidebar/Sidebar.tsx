import React from 'react';
import Image from 'next/image';
import {AiFillGithub,AiFillYoutube,AiFillLinkedin }from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'

const Sidebar = () => {
    return (
        <div className='text-center'> 
            
            <Image
              src="https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917543?k=20&m=1364917543&s=612x612&w=0&h=wQJmcJxdaCWsIG6XC_bVLJtZL1T4Ja9gOJBqnI6FXn4="
              alt="photo"
               width={100}
               height={100}
               className='mx-auto rounded-full'
            />
          <h3 className='my-4  text-3xl font-medium font-Kaushan tracking-wider'><span className='text-green-500'>Yousuf</span>  Hossein</h3>
          <p
           className=' bg-gray-200 rounded-full my-3 py-1 '>
            Wed devoleper
            </p>
          <a 
          className=' bg-gray-200 rounded-full my-3 py-1 flex justify-center items-center'
            href=''
            download='name'
          ><GiTie className='w-5 h-5'/>Download Resume</a>
          {/* social icon */}
    <div className="flex justify-around w-9/12 md:w-full text-green-500 mx-auto">
         <a href="#"><AiFillGithub className='w-8 h-8'/> </a>
         <a href="#"><AiFillLinkedin className='w-8 h-8'/></a>
         <a href="#"><AiFillYoutube className='w-8 h-8'/></a>
    </div>
         
         

          {/* address */}
          <div className="bg-gray-200 py-3 my-3" style={{marginRight:'-16px', marginLeft:'-16px'}}>
            <div className="flex justify-center items-center gap-2">
                <GoLocation/>
                <span>Dhaka Bangladesh</span>
            </div>
            <p className='my-1'>Yousuf81@gmail.com</p>
            <p>01889571217</p>
          </div>
          <button className='bg-gradient-to-r from-green-400 to-blue-400 w-8/12 my-2 py-2 rounded-full text-white' onClick={()=>window.open('mailto:Yousuf81@gmail.com')}>Email me</button>
          <button className='bg-gradient-to-r from-green-400 to-blue-400 w-8/12 my-2 py-2 rounded-full text-white'>Toggle Theme</button>
        </div>
       
    );
};

export default Sidebar;