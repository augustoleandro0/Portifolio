import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import Styled from  '../styles/border.module.css'

import {facebook,twitter,tiktok} from './icons'



export default function MenuMobile() {

    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className={`bg-white text-green-500 shadow-2xl flex fixed top-0 z-999 w-full md:hidden`} >
                <div className={`flex-grow text-center pl-12 inline-block align-middle py-3 text-2xl `}>
                    <Link href="/">
                        <a>TATOO</a>
                    </Link>
                </div>
                <nav>
                    <button onClick={showSidebar} className={`.btn p-4 `}>
                        <svg className={`text-black h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </div>


            <div className={` ${sidebar ? '-translate-x-full ' : 'md:translate-x-0'} bg-gray-100 w-52 z-999 fixed space-y-6 shadow-2xl py-7 px-2  inset-y-0 left-0 transform  transition duration-200 ease-in-out"`} >
                <button className={`flex float-right`} onClick={showSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <ul className={`px-6 `} >
                    <div className={`mb-8`}>
                        <Link href="/">
                            <a className={`text-lg text-green-500 mb-8`}>TATOO</a>
                        </Link>
                        <p>
                           Seu corpo uma tela em branco pronta para arte
                        </p>
                    </div>
                    <li  className={`mb-4`}>
                        <Link href="/">
                            <a className={Styled.underline}>Home</a>
                        </Link>
                    </li>
                    <li  className={`mb-4`}>
                        <Link href="/aboutArt">
                            <a className={Styled.underline}>Sobre Arte</a>
                        </Link>
                    </li>
                    <li className={``}>
                        <Link href="/contato">
                            <a className={Styled.underline}>Contato</a>
                        </Link>
                    </li>
                </ul>
                <div className={`flex ml-4`}>
                   <a href="http://">
                      {facebook}
                   </a>
                   <a href="http://">
                      {twitter}
                   </a>
                   <a href="http://">
                      {tiktok}
                   </a>
                </div>
                <div className={`ml-4`}>
                    <p>© 2021 TATOO.<br/>
                        All Rights Reserved.
                    </p>
                </div>
            </div>

        </>
    )



}