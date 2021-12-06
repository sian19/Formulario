import React from 'react';

import Button from './Button';

function TextArea(props) {

    function insert(eve) {
        let event = eve.target.value;
        props.addTextArea(event);
    }

    return (
        <section>
            <textarea name="text" id="0" cols="30" rows="10" placeholder='Fale sobre você...' onChange={insert}></textarea>

            <Button enviar={props.enviar}></Button>
        </section>
    )
}

export default TextArea;