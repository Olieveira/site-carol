import React from 'react'
import Menu from '../components/Menu';
import Head from 'next/head';
import Icone from '../public/favicon.ico'
import { Nav, Container, CarouselItem, CarouselCaption, Row, Col } from 'reactstrap'
import logo from '../src/logo.png'
import henna from '../src/henna.jpg'
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
            
            <Container fluid style={{ backgroundImage: `url(${henna})`}} className=' p-5 d-flex justify-content-around align-items-center'>
                <Carousel className='w-50 d-flex align-items-center'>

                    <Carousel.Item >
                        <Image
                            src={logo}
                            width={'250px'}
                            height={'100px'}

                        />
                        <Carousel.Caption>
                            <h3 style={{ margin: '10px auto 0 auto' }}>Micropigmentação</h3>
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

