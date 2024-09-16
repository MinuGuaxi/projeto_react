import React from 'react';

const Header =() => {
    return (
        <header>
            <h1>Olá, Mundo!</h1>
            <nav>
                <ul> 
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Sobre</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;