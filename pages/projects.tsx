import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import ProjectNavbar from '../Components/ProjectNavbar/ProjectNavbar';
import { projects as projectData } from '../data';
import { Category, IProject } from '../type';
import { motion} from 'framer-motion';
import {stagger,fadeUp,routeAnimate} from '../animation'


const Projects = () => {

  const [project ,setProject] =useState<IProject[]>(projectData)

  const [active , setActive ] =useState('all')
  const   [showDetail , setShowDetail]= useState<number | null>(null)
    
  const hendleSetProject = (catagory: Category | 'all'):void=>{
    
        if(catagory==='all'){
          console.log(catagory,'catagory')
          setProject(projectData)
          setActive(catagory)
        }
       else{
        const newAarry = projectData.filter(project => project.category.includes(catagory))  
        console.log('aray',newAarry,'state', project)
        setProject(newAarry)
        setActive(catagory)
       }


   
  }
    return (
        <motion.div variants={routeAnimate} initial='initial' animate='animate' exit='exit' className='my-5 overflow-y-scroll ' style={{height:'65vh'}}>
            <div className="mb-4">
            <ProjectNavbar
             hendleSetProject={hendleSetProject}
             active={active}
             />
            </div>
            <motion.div 
            variants={stagger}
            initial='initial'
            animate='animate'
            className='grid grid-cols-12 gap-3 relative ' >
            {
            project.map(project =>(
                <motion.div variants={fadeUp}  key={project.name} className=' col-span-12 md:col-span-6 lg:col-span-4 p-1 bg-gray-300 rounded dark:bg-gray-800'>
                   <ProjectCard project={project} setShowDetail={setShowDetail} showDetail={showDetail}></ProjectCard>
                </motion.div>
            ))
          }
            </motion.div>
         
        </motion.div>
    );
};

export default Projects;