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
                <Carousel>
                    <Carousel.Item>
                        <div className='d-flex justify-content-center align-items-center' style={{ minWidth: '100%', minHeight: '500px' }}>
                            <Image style={{ cursor: 'pointer' }}
                                src={henna}
                                width={'293px'}
                                height={'293px'}

                            />
                            <Carousel.Caption >
                                <h3>Henna</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div style={{ minWidth: '100%', minHeight: '500px'}} className='flex-grow-1 py-5'>
                                <Image style={{ cursor: 'pointer' }}
                                    src={microLabial}
                                    width={'293px'}
                                    height={'293px'}

                                />
                            </div>
                            <div>
                                <Carousel.Caption>
                                    <h3 className='my-0'>Micropigmentação Labial</h3>
                                </Carousel.Caption>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='d-flex justify-content-center align-items-center' style={{ minWidth: '100%', minHeight: '500px' }}>
                            <Image style={{ cursor: 'pointer' }}
                                src={alongamento}
                                width={'293px'}
                                height={'293px'}
                            />
                            <Carousel.Caption>
                                <h3 className='my-0'>alongamento de unha</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
};

export default App

