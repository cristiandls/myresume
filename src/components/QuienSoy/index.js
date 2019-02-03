import React from 'react';
import { Image } from 'semantic-ui-react';
import FotoPerfil from '../../images/foto.jpg';

const QuienSoy = () => {
  return (
    <div>
      <Image src={FotoPerfil} size='medium' centered circular bordered />
      <p className="heading">
        Cristian de la Sota
      </p>
      <p className="subheading">
        Hola! Soy Cristan. Soy Ingeniero en Sistemas (UAI 2014) y vivo en San Nicolás, Buenos Aires, Argentina.<br />
        Soy desarrollador ABAP Certificado y tengo experiencia en SAP PI, Fiori, UI5 y otras tecnologías dentro de SAP.
        Mi nivel de inglés es intermedio.<br /> Actualmente estoy incursionando en el desarrollo de aplicaciones web y
        tratando de convertirme en desarrollador full stack. También me interesan las tecnologías emergentes como IoT
        y Blockchain donde realicé varias PoC en la red de Ethereum.
      </p>
    </div>
  )
}

export default QuienSoy;