/* eslint-disable */
const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const port = process.env.PORT || 8080;
const directory = path.join(__dirname, 'dist');

let app = express();
let staticFileMiddleware = express.static(directory);

app.use(staticFileMiddleware);
app.use(history());
app.use(staticFileMiddleware);
// needs to be called twice per https://github.com/bripkens/connect-history-api-fallback/tree/master/examples/static-files-and-index-rewrite

app.get('/', (req, res) => {
  res.render(directory + '/index.html');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
