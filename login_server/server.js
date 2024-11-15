// mongodb
require("./config/db");

const app = require("express")();
// const port = 5000;
const port = process.env.PORT || 5000;

const UserRouter = require('./api/User');

// For accepting post form data
const bodyParser = require("express").json;
app.use(bodyParser());

app.use('/User', UserRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
