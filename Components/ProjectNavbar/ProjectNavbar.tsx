import { FunctionComponent } from "react";
import { Category } from "../../type";

type NavItem = {
    value: Category | 'all'
    hendleSetProject:Function
    active:string
}

export const NavItem = ({value,hendleSetProject,active}:NavItem)=>{
     let LiStyle = 'list-none capitalize hover:text-green-400 cursor-pointer '
     if(active === value){
        LiStyle += 'text-green-400'
     } 
     console.log(LiStyle)
    return (
        <li onClick={()=>hendleSetProject(value)} className={LiStyle}>{value} </li>
    )
      
}



const ProjectNavbar:FunctionComponent<{
    hendleSetProject:Function
    active:string
}> = (props) => {
    return (
      
        <div className="flex gap-4">
             <NavItem value={'all'} {...props}/>
             <NavItem value={'react'} {...props}/>
             <NavItem value={'node'} {...props}/>
             <NavItem value={'express'} {...props}/>
             <NavItem value={'django'} {...props}/>
             <NavItem value={'mongo'} {...props}/>
        </div>
    );
};

export default ProjectNavbar;



 