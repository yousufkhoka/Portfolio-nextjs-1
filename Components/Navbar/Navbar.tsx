import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {  useEffect, useState } from 'react';
type NavItemProps= {
    activeItem:string
    name:string
    route:string
    setActiveItem:Function
}
const NavItem1 = ({activeItem,name,route,setActiveItem}:NavItemProps) => {
    return activeItem !== name ?(
    <Link href={route}>
        <a className='text-lg font-semibold hover:text-green-500' onClick={()=>setActiveItem(name)}>{name}</a>
    </Link>
    ):null
    
         
}

const Navbar = () => {
    const [activeItem ,setActiveItem] = useState<string>('');
    const {pathname} = useRouter();
     useEffect(()=>{
        if(pathname === '/') setActiveItem('about');
        if(pathname === '/projects') setActiveItem('projects');
        if(pathname === '/resume') setActiveItem('resume');
     },[pathname])


    return (
        <div className='flex justify-between items-center'>
            <h3 className='text-green-500 underline decoration-4 text-2xl capitalize underline-offset-8 font-semibold'>{activeItem}</h3>
            <div className=' my-2 flex justify-end items-center gap-3 capitalize t'>
             
             <NavItem1 activeItem={activeItem} name='about' route='/' setActiveItem={setActiveItem}/>

             <NavItem1 activeItem={activeItem} name='projects' route='/projects' setActiveItem={setActiveItem}/>

            <NavItem1 activeItem={activeItem} name='resume' route='/resume' setActiveItem={setActiveItem}/>
            </div>
        </div>
    );
};

export default Navbar;