import React from 'react';
import { Menu } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';

const MenuBar = () => {
  return (
    <Menu size="tiny" stackable>
      <Menu.Item><HashLink smooth to="#QuienSoy">¿Quién soy?</HashLink></Menu.Item>
      <Menu.Item><HashLink smooth to="#QueSe">¿Qué se?</HashLink></Menu.Item>
      <Menu.Item><HashLink smooth to="#Contactame">Contactame</HashLink></Menu.Item>
    </Menu>
  )
}

export default MenuBar;