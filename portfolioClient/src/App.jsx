import './App.scss'
import { Routes,Route } from 'react-router-dom'
import Functionals from './Components/ConponentLearn/componentFunctional'
import Clicks from './Components/ConponentLearn/click'
import Layout from './Components/Layout/layout'


import Navbar from './Components/Navbar/navbar'
import About from './Components/About/about'
import Experience from './Components/Experience/experience'
import Services from './Components/Services/services'
import Portfolio from './Components/Portfolio/portfolio'
import Testimonial from './Components/Testimonial/testimonial'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import Home_page from './Components/Home-page/home'
import Sidebar from './Components/SideBar/sidebar'
function App() {
  return (
      <>
          <Routes>            
            <Route path='/' element={<Layout />}>
              <Route index element={<Home_page />}/>
              <Route path="/About" element={<About />}/>
              <Route path="/Contact" element={<Contact />}/>
              
            </Route>
         </Routes>
      </>
  )
}
export default App