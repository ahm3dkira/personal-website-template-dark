const express = require('express');
const fs = require('fs');
const fetch = require('node-fetch');

const app = express(); 
app.use(express.json());
app.use(express.urlencoded({limit: '5mb', extended: true}));
app.use(express.static('./public'));

app.get('/', (req, res)=>{res.redirect('/main'); }); 




app.get('/youtube', (req, res)=>{ 
    res.redirect('https://www.youtube.com/c/MrKira128'); 
}); 
app.get('/twitter', (req, res)=>{ 
    res.redirect('https://twitter.com/MrKira128'); 
}); 





// app.get('*', function(req, res){
//     res.status(404).send('what???');
// });

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Listening on port ${port}...`));