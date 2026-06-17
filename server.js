const express = require('express');
const axios = require('axios').default
const client = require('./redis');

const app = express()

app.get('/',async(req,res)=>{

  const  cValue = await client.get('todo') 

  if(cValue){
    return res.json(JSON.parse(cValue))
  }

  const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos/");
  await client.set('todo', JSON.stringify(data))
  return res.json(data)
})


app.listen(5000)