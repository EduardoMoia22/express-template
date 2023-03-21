
import express from 'express';

var app = express();

const users = [
  {
      id: 1,
      name: "Lucas"
  },
  {
      id: 2,
      name: "Eric"
  },
  {
      id: 3,
      name: "Ana"
  },
];


app.get('/', function(req:any, res:any){
  res.send('Hello!');
});

app.get('/users', function(req:any, res:any){
  res.send(users);
});

app.get('/users/:userId', function(req:any, res:any){
  const user = users.filter((user) => user.id == req.params.userId);
  res.send(user);
});

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}

export default app;