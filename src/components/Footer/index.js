import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment vertical>
      <Container textAlign='center'>
        <p className="footer"> © 2019 Cristian de la Sota</p>
      </Container>
    </Segment>
  );
};

export default Footer;
