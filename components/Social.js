import face from '../src/face.png'
import insta from '../src/insta.png'
import wpp from '../src/wpp.png'
import { Carousel, Button } from 'react-bootstrap';
import Image from 'next/image';

const Social = () => {
    return (
        <div>
            <div className='w-100 h-100' style={{ backgroundImage: `radial-Gradient(#d5bfbf, #877b7b)` }}>
                <div className='d-flex flex-wrap justify-content-around align-items-center px-5 pt-3 pb-3'>
                    <div className='d-flex flex-column align-items-left justify-content-center'>
                        <div className='mt-3 p-3' style={{ cursor: 'pointer', backgroundImage: `linear-gradient(to right, rgb(1 19 1), rgb(0 112 0))`, borderTopLeftRadius: '30px', WebKitBorderTopLeftRadius: '30px', borderBottomRightRadius: '30px', WebkitBorderBottomRightRadius: '30px', borderTopRightRadius: '15px', WebKitBorderTopRightRadius: '15px' }}>
                            <Image
                                src={wpp}
                                width={'100px'}
                                height={'100px'}
                            />
                        </div>
                        <div className='mb-4 d-flex flex-column justify-content-center align-items-center'>
                            <h5 className='text-center w-100 p-2' style={{cursor: 'pointer' ,backgroundImage: `linear-gradient(to right, rgb(1 19 1), rgb(0 112 0))`, borderTopRightRadius: '30px', WebKitBorderTopRightRadius: '30px', color: 'black'}}>WhatsApp</h5>
                            <div className='mt-1'>
                                <Button style={{backgroundImage: `linear-gradient(to right, #099409, #01ba03 )`}} target='_blank' href='https://wa.me/5541984564824'> Iniciar Conversa </Button>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex flex-column align-items-right justify-content-center'>
                        <div className='mt-3 p-3' style={{ backgroundImage: `linear-gradient(to right, #1103a8, #8f00c6, #a80451, #ffe702)`, borderTopRightRadius: '30px', WebKitBorderTopRightRadius: '30px', borderBottomLeftRadius: '30px', WebkitBorderBottomLeftRadius: '30px', borderTopLeftRadius: '15px', WebKitBorderTopLeftRadius: '15px'  }}>
                            <Image style={{ cursor: 'pointer' }}
                                src={insta}
                                width={'100px'}
                                height={'100px'}
                            />
                        </div>
                        <div className='mb-4 d-flex flex-column justify-content-center align-items-center'>
                            <h5 className='text-center w-100 p-2' style={{cursor: 'pointer' ,backgroundImage: `linear-gradient(to right, #1103a8, #8f00c6, #a80451, #ffe702)`, borderTopLeftRadius: '25px', WebKitBorderTopLeftRadius: '25px', color: 'black'}}>Instagram</h5>
                            <div className='mt-1'>
                                <Button style={{backgroundImage: `linear-gradient(to right, #6f01be, #a40365 )`}} target='_blank' href='https://www.instagram.com/studio_carolinevitoria/'> Ir para </Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Social;