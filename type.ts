import { IconType } from 'react-icons';
export type IServers ={
    id:number,
    Icon: IconType;
    title: string;
    about: string;

}
export interface ISkill {
    name:string
    level:string
    Icon:IconType
}
export interface IProject {
    id:number;
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    github_url: string;
    category: Category[];
    key_techs: string[];
  }
  
export type Category = "react" | "node" | "express" | "django" | "mongo";

