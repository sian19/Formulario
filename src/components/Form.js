import React, { useState } from 'react';

import '../style/global.css';
import '../style/input.css';
import '../style/text-area.css';
import '../style/button.css';
import '../style/modal.css';

import Nome from './Nome';
import Email from './Email';
import TextArea from './TextArea';
import Modal from './Modal';

import Data from './Data';

function Form() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [textArea, setTextArea] = useState('');

    const [show, setShow] = useState(false);

    function addNome(item) {
        setNome(item);
    }

    function addEmail(item) {
        setEmail(item);
    }

    function addTextArea(item) {
        setTextArea(item);
    }

    function enviar(envio) {
        if (envio && nome && email && textArea) {
            setShow(true);
        }

        else {
            alert("Preencha todos os campos!");
        }

    }

    let dataPerson = new Data(nome, email, textArea);

    return (
        <form>
            <h2>Preencha o formulário</h2>

            <Nome addNome={addNome}></Nome>

            <Email addEmail={addEmail}></Email>

            <TextArea addTextArea={addTextArea} enviar={enviar}></TextArea>

            <Modal show={show} dataPerson={dataPerson}></Modal>
        </form>
    )
}

export default Form;