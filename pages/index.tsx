
import React from 'react';
import ServicesCard from '../Components/ServicesCard/ServicesCard';
import  servers  from '../data';
import {motion} from 'framer-motion'
import { fadeUp,routeAnimate,stagger } from '../animation';

const About = () => {
    

  return <>
   <motion.div variants={routeAnimate} initial='initial' animate='animate' exit='exit'
   className='mt-5  flex flex-col flex-grow'>
    <h6 className='my-4 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae sit consequatur cum dolore ipsum repellat alias ipsam soluta reiciendis recusandae, voluptates quidem .</h6>
    <div className='bg-gray-400 dark:bg-gray-700 px-4 pb-7 flex-grow' style={{marginRight:'-1rem',marginLeft:'-1rem'}}>
      <h4 className='font-bold py-4  text-xl capitalize'>what I offer</h4>
      <motion.div 
      variants={stagger}
      initial='initial'
      animate='animate'
      className="grid lg:grid-cols-2 gap-6">
      {
          servers.map(services =>(
            < motion.div 
            variants={fadeUp}
            key={services.id} className='bg-gray-200 dark:bg-gray-800  rounded-lg p-3 col-span-1'>
            <ServicesCard  services={services}/>
            </motion.div>
          ) )}
      </motion.div>
    </div>
   </motion.div>
   
</>
};

export default About;
