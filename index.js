const express = require('express')


const app = express()

app.get('/heartbeat', async(req, res)=>{
    res.send('Okay CodeNBuild')
})

app.listen(3009, function CodeNBuild(){
    console.log('Server Running');
})