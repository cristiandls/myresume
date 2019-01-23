import React from 'react';
import { Icon, Grid, List } from 'semantic-ui-react';

const QueSe = () => {
  return (
    <div>
      <Icon name="certificate" size="massive" />
      <p className="heading">
        ¿Qué se?
      </p>
      <Grid>
        <Grid.Row columns={3} divided>
          <Grid.Column>
            <Icon name="tachometer alternate" color="orange" size="big" />
            <List bulleted>
              <List.Item>Git</List.Item>
              <List.Item>Webpack</List.Item>
              <List.Item>Agile developement</List.Item>
              <List.Item>AJAX</List.Item>
              <List.Item>jQuery</List.Item>
              <List.Item>Express</List.Item>
              <List.Item>Heroku</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Icon name="tachometer alternate" color="yellow" size="big" />
            <List bulleted>
              <List.Item>Node.js</List.Item>
              <List.Item>JavaScript (ES6)</List.Item>
              <List.Item>React</List.Item>
              <List.Item>React-native</List.Item>
              <List.Item>Redux</List.Item>
              <List.Item>HTML5</List.Item>
              <List.Item>CSS3</List.Item>
              <List.Item>Semantic-UI</List.Item>
              <List.Item>Firebase</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Icon name="tachometer alternate" color="green" size="big" />
            <List bulleted>
              <List.Item>SAP ABAP</List.Item>
              <List.Item>ABAP HR</List.Item>
              <List.Item>SAP PI</List.Item>
              <List.Item>Fiori</List.Item>
              <List.Item>UI5</List.Item>
              <List.Item>Mobile</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default QueSe;