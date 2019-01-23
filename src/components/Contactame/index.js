import React from 'react';
import { Icon, List } from 'semantic-ui-react';

const Contactame = () => {
  return (
    <div>
      <Icon name="address card" size="massive" />
      <p className="heading">
        Contactame
      </p>
      <List>
        <List.Item>
          <a className="contact" href="mailto: cristiandelasota@gmail.com">
            <Icon name="mail" size="small" circular />
            Mail
          </a>
        </List.Item>

        <List.Item>
          <a className="contact" href="https://www.linkedin.com/in/cristian-daniel-de-la-sota-1b81b8a/">
            <Icon name="linkedin" size="small" circular />
            LinkedIn
          </a>
        </List.Item>

        <List.Item>
          <a className="contact" href="https://github.com/cristiandls">
            <Icon name="github" size="small" circular />
            GitHub
          </a>
        </List.Item>

        <List.Item>
          <a className="contact" href="https://medium.com">
            <Icon name="medium" size="small" circular />
            Medium
          </a>
        </List.Item>

        <List.Item>
          <a className="contact" href="https://twitter.com/CDLS_F1">
            <Icon name="twitter" size="small" circular />
            Twitter
          </a>
        </List.Item>

      </List>
    </div>
  )
}

export default Contactame;