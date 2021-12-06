import React from 'react';

function Email(props) {

    function insert(eve) {
        let event = eve.target.value;
        props.addEmail(event);
    }

    return (
        <section>
            <h3>*Email</h3>
            <input type="text" placeholder='Digite seu email' onChange={insert} />
        </section>
    )
}

export default Email;