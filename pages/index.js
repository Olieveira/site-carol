import React from 'react'
import Menu from '../components/Menu';
import Head from 'next/head';
import Icone from '../public/favicon.ico'
import { Nav, Container, CarouselItem, CarouselCaption, Row, Col } from 'reactstrap'
import logo from '../src/logo.png'
import henna from '../src/henna.jpg'
import microLabial from '../src/micropigmentacao-labial.jpg'
import alongamento from '../src/alongamento.jpg'
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

            <Container fluid style={{ backgroundImage: `linear-gradient(to right, #bb5555, #584c99)`, minHeight: '500px', minWidth: '100%' }} className='d-flex align-content-center justify-content-center align-items-center'>
                <Carousel className='px-5'>
                    <Carousel.Item className='px-5'>
                        <div className='d-flex justify-content-around align-items-center m-3' style={{ minWidth: '100%', minHeight: '500px' }}>
                            <Image style={{ cursor: 'pointer', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', WebkitBorderTopRightRadius: '30px', WebkitBorderBottomLeftRadius: '30px' }}
                                src={henna}
                                width={'293px'}
                                height={'293px'}

                            />
                            <Carousel.Caption>
                                <h3>Henna</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className='px-5'>
                        <div className='d-flex justify-content-around align-items-center m-3' style={{ minWidth: '100%', minHeight: '500px' }}>
                            <Image style={{ cursor: 'pointer', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', WebkitBorderTopRightRadius: '30px', WebkitBorderBottomLeftRadius: '30px' }}
                                src={alongamento}
                                width={'293px'}
                                height={'293px'}

                            />
                            <Carousel.Caption >
                                <h3>alongamento de Unha</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className='px-5'>
                        <div className='d-flex justify-content-center align-items-center m-3' style={{ minWidth: '100%', minHeight: '500px' }}>
                            <Image style={{ cursor: 'pointer', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', WebkitBorderTopRightRadius: '30px', WebkitBorderBottomLeftRadius: '30px' }}
                                src={microLabial}
                                width={'293px'}
                                height={'293px'}

                            />
                            <Carousel.Caption >
                                <h3>Micropigmentação Labial</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <div className='w-100 h-100' style={{ backgroundImage: `radial-Gradient(#d5bfbf, #877b7b)` }}>
                <div className='d-flex flex-wrap justify-content-around align-items-center px-5'>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='my-3 p-3' style={{ backgroundColor: `rgba(73,193,105,0.5)`, borderRadius: '50%' }}>
                            <Image
                                src={logo}
                                width={'171px'}
                                height={'120px'}
                            />
                        </div>
                        <h3>WhatsApp</h3>
                    </div>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='my-3 p-3' style={{ backgroundColor: `rgba(73,193,105,0.5)`, borderRadius: '50%' }}>
                            <Image
                                src={logo}
                                width={'171px'}
                                height={'120px'}
                            />
                        </div>
                        <h3>WhatsApp</h3>
                    </div>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='my-3 p-3' style={{ backgroundColor: `rgba(73,193,105,0.5)`, borderRadius: '50%' }}>
                            <Image
                                src={logo}
                                width={'171px'}
                                height={'120px'}
                            />
                        </div>
                        <h3>WhatsApp</h3>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default App

