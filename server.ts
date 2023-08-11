import app from './app'
require('express-async-errors');

const port = 6000;
app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});