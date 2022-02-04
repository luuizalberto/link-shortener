import './menu.css'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'


export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://www.linkedin.com/in/luiz-alberto-dev/'>
                <BsLinkedin size={24} color='#fff'/>
            </a>
            <a className='social' href='https://www.instagram.com/luuiz.alberto'>
                <BsInstagram size={24} color='#fff'/>
            </a>
            <Link className='menu-item' to="/links">
                Meus Links
            </Link>
        </div>
    )
}