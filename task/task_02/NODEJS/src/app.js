const express = require('express');
const app = express();

const morgan = require ('morgan');
const bodyParser = require('body-parser');

//settings
app.set('port',process.env.PORT||3000);

//middlewars
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
require('./routes/userRoute')(app);

app.listen(app.get('port'),()=>{
	console.log('server on port 3000');
});
