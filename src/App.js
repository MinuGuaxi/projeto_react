import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import './assets/css/style.css';


function App( ) {
  return (
    <div className='App'>
      <Header /> {/* Conteudo do cabeçario aqui */}
      <Main /> {/* Conteudo Principal aqui */}
      <TextInput /> {/* Conteudo do input aqui */}
      <Greeting name="Felipe" /> {/* Conteudo de Saudação aqui */}
      <Counter /> {/* Conteudo do Contador aqui */}
      <Footer /> {/* Conteudo do Rodapé aqui */}
    </div>
  );
}

export default App;