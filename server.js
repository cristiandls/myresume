const
  express = require('express'),
  path = require('path'),
  port = process.env.PORT || 8080,
  app = express(),
  redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

// Don't redirect if the hostname is `localhost:port` or the route is `/insecure`
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

// Middlewares
app.use(express.static('./build/'));

// Router para lo estatico
const router = express.Router();

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.use(router);

app.listen(port);

console.log('Servidor corriendo en puerto: ' + port);