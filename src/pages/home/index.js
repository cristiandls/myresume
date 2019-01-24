import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button';
import { MenuBar, QuienSoy, QueSe, Contactame, Footer } from '../../components';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <Container textAlign="center">

          {/*¿Quién soy?*/}
          <section style={{ marginBottom: '100px' }} id="QuienSoy">
            <QuienSoy />
          </section>

          {/*¿Qué se?*/}
          <section style={{ marginBottom: '100px' }} id="QueSe">
            <QueSe />
          </section>

          {/*Contactame*/}
          <section style={{ marginBottom: '100px' }} id="Contactame">
            <Contactame />
          </section>

          {/*Botón de scroll up*/}
          <ScrollUpButton EasingType="linear" ShowAtPosition={20} />

        </Container>

        {/*Pié de página*/}
        <Footer />

        {/*Contador de visitas */}
        <img
          style={{ width: '50px', height: '10px' }}
          src="https://smallseotools.com/counterDisplay?code=0b4d8577c9f2850728ce8b93eb468af8&style=0015&pad=6&type=page&initCount="
          title="Web Counter" Alt="Web Counter" border="0" />
          
      </div>
    );
  }
}

export default Home;
