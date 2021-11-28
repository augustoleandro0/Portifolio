import Link from 'next/link'
import { useState } from 'react'

import Styled from '../styles/border.module.css'

import { facebook, twitter, tiktok } from './icons'

export default function Sidebar() {

    return (
        <>
            <div className={`bg-gray-200 w-52 h-full shadow-2xl space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:fixed md:translate-x-0 transition duration-200 ease-in-out"`} >

                <ul className={`p-6`} >
                    <div className={`mb-8`}>
                        <Link href="/">
                            <a className={`text-lg text-green-500 mb-8`}>TATOO</a>
                        </Link>
                        <p>
                            Seu corpo uma tela em branco pronta para arte
                        </p>
                    </div>
                    <li className={`mb-4`}>
                        <Link href="/">
                            <a className={Styled.underline}>Home</a>
                        </Link>
                    </li>
                    <li className={`mb-4`}>
                        <Link href="/aboutArt">
                            <a className={Styled.underline}>Sobre Artes</a>
                        </Link>
                    </li>
                    <li className={`mb-4`}>
                        <Link href="/contato">
                            <a className={Styled.underline}>Contato</a>
                        </Link>
                    </li>
                </ul>
                <div className={`flex p-4`}>
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
                <div className={`p-4`}>
                    <p>© 2021 TATOO.<br />
                        All Rights Reserved.
                    </p>
                </div>
            </div>

        </>
    )
}


