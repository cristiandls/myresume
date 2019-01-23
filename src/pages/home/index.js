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
        <Footer />
      </div>
    );
  }
}

export default Home;
