// import React from 'react'
import Menu from '../components/Menu';
import Head from 'next/head';
import { styled } from '../src/stitches.config';
import Icone from '../public/favicon.ico'
import { Nav, Container } from 'reactstrap'


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
            <div>
                <Container>
                    <h1>Just testing</h1>
                </Container>
            </div>
        </div>
    )
};

export default App

