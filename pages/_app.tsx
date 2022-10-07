import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';
import {ThemeProvider} from 'next-themes';
import {AnimatePresence} from 'framer-motion';
import { useEffect } from 'react';
// import Layout from "../components/Layout";


function MyApp({ Component, pageProps,router }: AppProps) {
//   useEffect(() => {
//     // import('tw-elements');
// }, []);
  return(
    <ThemeProvider attribute='class'>
    <div className='grid grid-cols-12 gap-4  lg:px-48 py-14 px-5 sm:px-20 md:px-32 '>
      <div className="lg:col-span-4 col-span-12 bg-white p-4 dark:bg-gray-900 rounded-lg">
        <Sidebar/>
        </div>
      <div className="lg:col-span-8 col-span-12 bg-white dark:bg-gray-900 px-4 rounded-lg overflow-hidden">
        <Navbar/>
        <AnimatePresence exitBeforeEnter>

      <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default MyApp
