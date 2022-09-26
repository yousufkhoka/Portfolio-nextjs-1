import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className='grid grid-cols-12 gap-4  lg:px-48 py-14 px-5 sm:px-20 sm:px-32 '>
      <div className="lg:col-span-4 col-span-12 bg-white p-4 rounded-lg">
        <Sidebar/>
        </div>
      <div className="lg:col-span-8 col-span-12 bg-white p-4 rounded-lg">
        <Navbar/>
      <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
