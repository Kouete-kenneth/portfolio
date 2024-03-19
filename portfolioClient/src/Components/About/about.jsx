import './about.scss'
import '../Layout/layout.scss'
import AnimatedLetters from '../AnimatedLetters/animate'
import Layout from '../Layout/layout';
import Loader from 'react-loaders'
import {faAngular, faCss3, faFacebook, faGitAlt, faHtml5, faJava, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About=()=>{
    return(
       <>
         <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['A','b','o','u','t',' ','m','e']} index={15}  />
                </h1>
                <p>
                     Based in Cameroon, i'm a full stack developper passionate about  building 
                    Accessible, fast and responsive web-based and hybrid Applications
                    "Your satisfaction is my Priority !!!!!"
                </p>
                <p>
                    I'm Qietly confident, naturally very curius, and perpetually working on improving my chops,
                     one problem at a time
                </p>
                <p>
                    if i need to difine myself in one sentence that will be caring, sport fanatic,
                    Knowledge Thirst, Tech Anthusiatt, 
                    and Software-obessed !!!
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#Ec4D28'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color='#DD00031'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color='#F06529'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faGitAlt} color='#28A4D9'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faCss3} color='#5ED4F4'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faHtml5} color='#EFf81D'/>
                    </div>
                </div>
            </div>      
        </div>

            <Loader type="pacman"/>
       </>
       
    );
}
export default About