import { Button } from 'react-bootstrap';
import Image from 'next/image';
import maps from '../src/map.png'
import notifications from '../src/notifications.png'

const Maps = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, #292323, #1f1b1b)`, color: 'white' }} className=' d-flex flex-row justify-content-center align-items-center flex-wrap'>
        
            <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <Image
                    src={maps}
                    width={'100%'}
                    height={'100%'}
                />
                <div className='my-4 px-5 text-center'>
                    <h4>Localização</h4>
                    <p className='px-5'>Veja onde estamos situados e venha usufruir os beneficios dos nossos serviços!</p>
                </div>
                <div>
                    <Button
                        href='https://www.google.com/maps/dir//R.+Jorn.+Augusto+Waldrigues,+286+-+Cidade+Industrial+de+Curitiba,+Curitiba+-+PR,+81460-238/@-25.532249,-49.3377362,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94dcfd16367ce9c3:0x2a499b71456d49bb!2m2!1d-49.3377362!2d-25.532249!3e0'
                        target='_blank'
                    >
                        Rotas
                    </Button>
                </div>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <Image
                    src={notifications}
                    width={'100%'}
                    height={'100%'}
                />
                <div className='my-4 px-5 text-center'>
                    <h4>Notificações</h4>
                    <p className='px-5'>Cadastre seu email e receba nossas ofertas em primeira mão!!!</p>
                </div>
                <div>
                    <Button> Cadastro </Button>
                </div>
            </div>

        </div>

    );
}

export default Maps