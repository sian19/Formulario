import React from 'react';

function Modal(props) {
    return (
        <div className={props.show ? 'onModal' : 'offModal'}>
            <div className='data'>
                <h2>Dados</h2>
                <h3><span>Nome:</span>  {props.dataPerson.nome}</h3>
                <h3><span>Email: </span>  {props.dataPerson.email}</h3>
                <h3><span>Sobre: </span>  {props.dataPerson.text}</h3>
            </div>
            <button>Formulário enviado com sucesso!</button>
        </div>
    )
}

export default Modal;