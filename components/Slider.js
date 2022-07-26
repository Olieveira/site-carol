import henna from '../src/henna.jpg'
import microLabial from '../src/micropigmentacao-labial.jpg'
import alongamento from '../src/alongamento.jpg'
import micro from '../src/micro.jpg'
import make from '../src/make.jpg'
import tranca from '../src/tranca.jpg'
import { Container } from 'reactstrap'
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

const Slider = () => {
    return (
        <div>
            <Container style={{ backgroundImage: `linear-gradient(to right, #bb5555, #584c99)`, minHeight: '800px', minWidth: '100%' }} className='d-flex align-content-center justify-content-center align-items-center'>
                <Carousel className='px-5 w-100'>
                    <Carousel.Item className='px-5'>
                        <div className='d-flex justify-content-around align-items-center' style={{ minWidth: '100%', minHeight: '500px' }}>
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
                        <div className='d-flex justify-content-around align-items-center' style={{ minWidth: '100%', minHeight: '500px' }}>
                            <Image style={{ cursor: 'pointer', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', WebkitBorderTopRightRadius: '30px', WebkitBorderBottomLeftRadius: '30px' }}
                                src={microLabial}
                                width={'293px'}
                                height={'293px'}

                            />

                            <Carousel.Caption>
                                <h3>Micropigmentação Labial</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className='px-5'>
                        <div className='d-flex justify-content-around align-items-center' style={{ minWidth: '100%', minHeight: '500px' }}>
                            <Image style={{ cursor: 'pointer', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', WebkitBorderTopRightRadius: '30px', WebkitBorderBottomLeftRadius: '30px' }}
                                src={alongamento}
                                width={'293px'}
                                height={'293px'}


                            />

                            <Carousel.Caption>
                                <h3>Alongamento de Unha</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className='px-5'>
                        <div className='d-flex justify-content-around align-items-center' style={{ minWidth: '100%', minHeight: '500px' }}>
                            <Image style={{ cursor: 'pointer', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', WebkitBorderTopRightRadius: '30px', WebkitBorderBottomLeftRadius: '30px' }}
                                src={make}
                                width={'293px'}
                                height={'293px'}
                            />

                            <Carousel.Caption>
                                <h3>Maquiagem</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className='px-5'>
                        <div className='d-flex justify-content-around align-items-center' style={{ minWidth: '100%', minHeight: '500px' }}>
                            <Image style={{ cursor: 'pointer', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', WebkitBorderTopRightRadius: '30px', WebkitBorderBottomLeftRadius: '30px' }}
                                src={micro}
                                width={'293px'}
                                height={'293px'}
                            />

                            <Carousel.Caption>
                                <h3>Micropigmentação</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className='px-5'>
                        <div className='d-flex justify-content-around align-items-center' style={{ minWidth: '100%', minHeight: '500px' }}>
                            <Image style={{ cursor: 'pointer', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', WebkitBorderTopRightRadius: '30px', WebkitBorderBottomLeftRadius: '30px' }}
                                src={tranca}
                                width={'293px'}
                                height={'293px'}
                            />

                            <Carousel.Caption>
                                <h3>Tranças</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default Slider;