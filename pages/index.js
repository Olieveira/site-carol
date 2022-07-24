import React from 'react'
import Menu from '../components/Menu';
import Slider from '../components/Slider'
import Head from 'next/head';
import Social from '../components/Social';
import Icone from '../public/favicon.ico'

import logo from '../src/logo.png'




import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
    return (
        <div>
            <Head>
                <meta name='description' content='Studio de estética e beleza, Micropigmentação, Henna, fio a fio, Estudio de estética' />
                <meta name='author' content='Studio CV' />
                <link rel='shortcut icon' href={Icone} type='image/x-icon' />
                <title>Studio CV</title>
            </Head>

            <Menu />

            <Slider />

            <Social />

            <footer style={{backgroundColor: 'black', color: 'gray'}} className='w-100 d-flex p-2'>© CopyRight Studio Caroline Vitoria</footer>

        </div>
    )
};

export default App

