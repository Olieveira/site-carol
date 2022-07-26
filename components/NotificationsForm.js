import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import bell from '../src/notify.png'
import Image from 'next/image';

function NotificationsForm() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='d-flex flex-row justify-content-center align-items-center' style={{minHeight: '900px', color: 'white', backgroundColor: '#1f1b1b' }}>
            <div className='p-5'>
                <div className='d-flex flex-row justify-content-between align-items-center px-5'>
                    <div className='m-3 p-1' style={{ borderRadius: '50%', border: '1px gray solid', backgroundImage: `linear-gradient(To right, rgb(41, 35, 35), rgb(31, 27, 27))` }}>

                        <Image
                            src={bell}
                            width={'80px'}
                            height={'80px'}
                        />

                    </div>
                    <div className='m-3'>
                        <h3>Que tal receber nossos avisos promocionais?!</h3>
                    </div>
                </div>
                <hr style={{ boxShadow: '0 3px 10px white' }} />
                <div className='d-flex flex-row justify-content-center align-items-center flex-wrap'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className='my-2' md="4" controlId="validationCustom01">

                            <Form.Label>Como podemos chamar você?</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ex: Fulano de tal"
                            />
                            <Form.Control.Feedback type="invalid">Favor preencher o campo!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='my-2' md="4" controlId="validationCustomUsername">
                            <Form.Label>Seu melhor email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    placeholder="Ex: Fulano@hotmail.com"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, insira um email válido!
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>


                        <Form.Group className='my-2' md="6" controlId="validationCustom03">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text" placeholder="Ex: Curitiba (opcional)" />
                        </Form.Group>

                        <Form.Group className='my-2' md="3" controlId="validationCustom04">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" placeholder="Ex: Paraná (opcional)" />
                        </Form.Group>

                        <Form.Group className="mb-3 my-2 mt-4">
                            <Form.Check
                                required
                                label="Concordo em receber avisos e ofertas promocionais!"
                                feedback="Concorde com os termos para prosseguir!"
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit">Enviar</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}


export default NotificationsForm