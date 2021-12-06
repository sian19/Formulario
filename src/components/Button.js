import React from 'react';

function Button(props) {

    function submit(e) {
        e.preventDefault();
        let envio = true;
        props.enviar(envio)
    }

    return (
        <div className='button'>
            <button onClick={submit}>Enviar</button>
        </div>
    )
}

export default Button;