import React from 'react';
import './layout.scss';
import Sidebar from '../SideBar/sidebar';
import Navbar from '../Navbar/navbar'
import Home from '../Home-page/home';
import About from '../About/about';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Layout=() => {
      return (
      <div className='MainLayout'>
         <Navbar /> 
          <Sidebar/>
         <div className='page'>
         <span className='tags top-tag-html'>&lt;html&gt;</span><br />
            <span className='tags top-tags'>
               &lt;body&gt;</span>
            
            <Outlet/>

            <span className='tags bottom-tags'>
               &lt;/body&gt;
               <br />
               <span className='tags bottom-tag-html'>&lt;/html&gt;</span>
            </span>
         </div>
      </div>
   );
}

export default Layout