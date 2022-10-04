import React from 'react';
import { IServers } from '../../type';

type ServicesCardProps = {
    services:IServers
}



const ServicesCard = ({services:{title,Icon,about}}:ServicesCardProps) => {
    // const aboutMarkaup = ()=>{
    //     return{
    //         __html:about
    //     }
    // }
    
    return (
        <div className='flex  items-center gap-3'>
            <Icon className='w-12 h-12 text-green-500'/>
            <div className="">
                <h4 className='font-bold'>{title}</h4>
                <p className='text-sm' >{about}</p>
            </div>
        </div>
    );
};

export default ServicesCard;