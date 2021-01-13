/**
 * Vue Webpack Starter Server
 */

const express = require('express')
const path =require('path')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.info(
    'Listening on port %s, Open up http://127.0.0.1:%s/ in your browser.',
    port,
    port
  );
});
