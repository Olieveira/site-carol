import React from 'react'
import Menu from '../components/Menu';
import Head from 'next/head';
import Icone from '../public/favicon.ico'
import { Nav, Container, CarouselItem, CarouselCaption } from 'reactstrap'
import logo from '../src/logo.png'
import { Carousel } from 'react-bootstrap';
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
            <Container fluid className='justify-content-center align-items-center' style={{ backgroundColor: '#000000', minHeight: '500px', paddingTop: '20px' }}>
                <Carousel className='p-5'>
                    <Carousel.Item>
                        <Image
                            src={logo}
                            width={'250px'}
                            height={'100px'}
                        />
                        <Carousel.Caption>
                            <h3>Micropigmentação</h3>
                            <p>bla bla bla bla bla...</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image
                            src={logo}
                            width={'250px'}
                            height={'100px'}

                        />
                        <Carousel.Caption>
                            <h3>Henna</h3>
                            <p>bla bla bla bla bla...</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image
                            src={logo}
                            width={'250px'}
                            height={'100px'}
                        />
                        <Carousel.Caption>
                            <h3>Fio a Fio</h3>
                            <p>bla bla bla bla bla...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
};

export default App

