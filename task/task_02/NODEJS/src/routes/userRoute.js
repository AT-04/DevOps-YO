const user = require ('../models/user');

module.exports = function (app) {
  app.get('/users', (req, res) => {
	user.getUsers((err,data)=>{
		res.json(data);
	});
});

  app.get('/users/:id',(req,res) =>{
  	user.getbyID(req.params.id, (err,data)=>{
  		res.status(200).json(data);
  	});
  });

 }
