// import { useTheme } from 'next-themes';
const ThemeButton = () => {
    // const {theme, setTheme}= useTheme()
    // const changeTheme =()=>{
    //   setTheme(theme==='light'?'dark':'lin')
    // }
    return (
       
        <button
            // onClick={changeTheme}
          className='bg-gradient-to-r from-green-400 to-blue-400 w-8/12 my-2 py-2 rounded-full text-white'>
             Toggle Theme
        </button>
  
      
    );
};

export default ThemeButton;

