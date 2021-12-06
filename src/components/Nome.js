import React, { useState } from 'react';

function Nome(props) {

    function insert(eve) {
        let event = eve.target.value;
        props.addNome(event);
    }

    return (
        <section>
            <h3>*Nome</h3>
            <input type="text" placeholder="Digite seu nome" onChange={insert} />
        </section>
    )
}
export default Nome;