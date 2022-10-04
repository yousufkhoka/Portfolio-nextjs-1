import React, { FunctionComponent } from 'react';
import { ISkill } from '../../type';
import {  motion } from 'framer-motion';

const Bar:FunctionComponent<{
  data:ISkill
  key:string
}> = ({data:{name,level,Icon}}) => {

   const variants ={
    initial:{
        width:0
    },
    animate:{
        width:level,
        trnsition:{
            duration:.4,
            type: "spring",
            damping: 10,
            stiffness: 100
        }
    }

   }

    return (
        
            <div className='bg-gray-400 dark:bg-gray-800 my-3 rounded-full '>
                <motion.div 
                 variants={variants}
                 initial='initial'
                 animate='animate'
                className="flex gap-3  items-center bg-gradient-to-r p-1 rounded-full text-white from-green-600 to-blue-500" style={{width:`${level}`}}>
                    <Icon></Icon>
                     <h5>{name}</h5>
                </motion.div>
            </div>
    );
};

export default Bar;