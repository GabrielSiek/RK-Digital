import React, { useState } from 'react';
import Botao from '../Botao/Botao';

import './Header.css';

const Header = () => {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const handleMenuClick = () => {
        setMenuAtivo(!menuAtivo);
    };

    function changeScrollHeight() {

        if(window.innerWidth > 1000){
            if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
                document.getElementById("container-header").style.margin = "4px 16px"
            }
            else{
                document.getElementById("container-header").style.margin = "16px 16px"

            }    
        }
    }

    window.onscroll = function() {changeScrollHeight()};

    return (

        <header className={'header'}>
            <div className='container-header' id='container-header'>
                <img className='logo-header' src='/imagens/logo-azul.png' alt='logo RK Digital' />

                <button className={`hamburger ${menuAtivo ? 'active' : ''}`} onClick={handleMenuClick}>
                    <div className='linhas'>
                        <div className='linha-1' />
                        <div className='linha-2' />
                        <div className='linha-3' />
                    </div>
                </button>

                <nav className={`nav ${menuAtivo ? 'active' : ''}`}>
                    <ul className='nav-list'>
                        <li><a className='link-header'>Sobre nós</a></li>
                        <li><a className='link-header'>Resultados</a></li>
                        <li><a  className='link-header'>Serviços</a></li>
                        <li className='contato-navlist-header'><a>Contato</a></li>
                    </ul>
                </nav>

                <div className='bt-contato-header'>
                    <Botao estilo='secundario menor'>Contato</Botao>
                </div>
            </div>

        </header>
    );
};

export default Header;