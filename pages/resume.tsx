import React from 'react';
import Bar from '../Components/Bar/Bar';
import { languages, tootes } from '../data';
import { motion} from 'framer-motion'
import { fadeUp, routeAnimate } from '../animation';



const Resume = () => {
    
    return (
        <motion.div variants={routeAnimate} initial='initial' animate='animate' exit='exit'>
            <div className='grid lg:grid-cols-2 gap-4 mb-7 mt-5'>
                  <motion.div
                  variants={fadeUp}
                  initial='initial'
                  animate='animate'
                   className="">
                    <h2 className='text-2xl dark:text-gray-50 text-gray-800 font-bold'>Education</h2>
                    <h4 className='text-xl dark:text-gray-200 text-gray-700 font-semibold'>Compuer Science </h4>
                    <h5 className='text-md text-gray-600 font-semibold dark:text-gray-300'>Academy & Technology{'(2021-2023)'}</h5>
                    <p className='text-sm dark:text-gray-400 text-gray-700 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
                  </motion.div>
                  <motion.div 
                  variants={fadeUp}
                  initial='initial'
                  animate='animate'
                  className="">
                    <h2 className='text-2xl dark:text-gray-50 text-gray-800 font-bold'>Experince</h2>
                    <h4 className='text-xl dark:text-gray-200 text-gray-700 font-semibold'>Softwarer Engineer Jr.</h4>
                    <h5 className='text-md dark:text-gray-300 text-gray-600 font-semibold'>TSC{'(2021-on)'}</h5>
                    <p className='text-sm dark:text-gray-400 text-gray-700 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
                  </motion.div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
                <div>
                    <h5 className='text-2xl font-bold dark:text-gray-200 text-gray-700'>Languages & Farmeworks</h5>
                {
                    languages.map(language => <Bar key={language.name} data={language}/>)
                }
                </div>
                <div className="">
                <h5 className='text-2xl dark:text-gray-200 text-gray-700 font-bold'>toole & Softwarer</h5>
                {
                    tootes.map(toote => <Bar key={toote.name} data={toote}/>)
                }
                </div>
               
            </div>
        </motion.div>
    );
};

export default Resume;