import React from 'react'
import { Link } from 'react-router-dom'
import CV from '../../Assets/Docs/Cover_letter.pdf'
import Contact from '../Contact/contact'
import './CTA.scss'
const CTA = () => {
return (
<div className='cta'>
<a href={CV} download className='btn'>Download CV</a>
<Link  to='/Contact' className='btn btn-primary'>
            Let's Talk
</Link>
</div>
)
}
export default CTA