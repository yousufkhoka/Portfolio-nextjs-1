import Image from 'next/image';
import React, { FunctionComponent, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import {  MdClose } from 'react-icons/md';
import { stagger,fadeUp } from '../../animation';
import { IProject } from '../../type';
import {  motion}from 'framer-motion'


type projectCardProps = {
    project:IProject
    showDetail:number | null
    setShowDetail:(id:number | null) => void
}


const ProjectCard = ({project:{
    name,github_url,deployed_url,key_techs,image_path,category,id,description
}, showDetail,setShowDetail}:projectCardProps) => {
    

       
    return (
        <div>
                <Image
                 className='cursor-pointer'
                  src={image_path}
                  layout="responsive"
                  height="150"
                   width="300"
                   onClick={()=>setShowDetail(id)}
                  alt={name} />
                <h4 className='my-3 text-center'>{name}</h4>



           {showDetail === id && <div className="absolute top-0 left-0 z-10 md:p-5 rounded-lg grid gap-x-12 md:grid-cols-2 p-3 bg-gray-100  dark:bg-black w-full h-auto">
            <motion.div 
            variants={stagger}
            className='mt-2'>
                <motion.div variants={fadeUp} className='border-4 border-gray-200'>
                <Image
                 className='cursor-pointer'
                  src={image_path}
                  layout="responsive"
                  height='150'
                  width='300'
                  alt={name} />
                </motion.div>
               

                          
                <motion.div variants={fadeUp} className="flex justify-center gap-3 mt-3 mb-5">
                    <a href={github_url}
                    className='px-3 rounded-sm py-1 my-2 bg-gray-200 dark:bg-gray-800 flex items-center gap-2'
                    ><AiFillGithub/> <span>Github</span> </a>
                    <a href={deployed_url}
                     className='px-3 rounded-sm py-1 my-2 bg-gray-200 dark:bg-gray-800 flex items-center gap-2'
                    ><AiFillProject/> <span>deployed</span> </a>
                </motion.div>
                </motion.div>
                <motion.div variants={stagger}  className="">
                    <motion.h3 variants={fadeUp} className='text-xl font-medium md:text-2xl mb-2'>{name}</motion.h3>
                    <motion.p variants={fadeUp} className=''>{description.substring(0,100)}</motion.p>
                   <motion.div variants={fadeUp} className="flex flex-wrap gap-1 mt-3">
                    {
                       key_techs.map(key_tech =><span
                        className='px-2 rounded-md py-1  bg-gray-200 dark:bg-gray-800  '
                        key={key_tech}>{key_tech}
                        </span>) 
                    }
                   </motion.div>
                </motion.div>
                <motion.button
                variants={fadeUp}
                initial='initial'
                animate='animate'
                onClick={()=>setShowDetail(null)}
                className='absolute top-2 right-2 bg-gray-200 w-9 h-9 rounded-full flex justify-center items-center dark:bg-gray-900 '><MdClose size={30}/>
                </motion.button>
            </div>}

        </div>
    );
};
export default ProjectCard;