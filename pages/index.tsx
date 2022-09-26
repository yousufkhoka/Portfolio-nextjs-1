import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className='grid grid-cols-12 gap-4  lg:px-48 py-14 px-5 sm:px-20 '>
      <div className="md:col-span-4 col-span-12 bg-white p-4 rounded-lg">
        <Sidebar/>
        </div>
      <div className="md:col-span-8 col-span-12 bg-white p-4 rounded-lg"> mine section</div>
    </div>
  );
};

export default Home;
