

const express = require('express')

const app = express();

app.use(date=(req,res,next)=>{
let requestAt=new Date()
console.log(requestAt)
next()
})


/*app.use(verifytime=(req,res,next)=>{
  const date =new Date();
  console.log(date);
  if (date.getDay() !== 0 && date.getDay() !== 6 && date.getHours()>=9 && date.getHours()<=17) {next()}
  else {res.sendFile(__dirname + '/public/notAvailable.html')}
})*/

app.set('view engine', 'hbs');
app.get('/user/:name',(req,res)=>{
  res.render('user.hbs',{name:req.params.name} )
 });


app.use(express.static(__dirname +'/public'))


app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/public/home.html') ;
})
/*
app.get('/services',(req,res)=>{
  res.sendFile(__dirname + '/public/services.html') ;
})

app.get('/contacts',(req,res)=>{
  res.sendFile(__dirname + '/public/contacts.html') ;
})
*/
app.listen(3000, () => {
  console.log('server is running on port 3000')
})