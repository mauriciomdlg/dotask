const express = require('express');
//setup express
const app = express();

const PORT = process.env.PORT || 3000

function doWork (task){
    return `Task complete: ${task}`
}

//configure you doors aka routes  verbs

app.get("/doWork", (request, response) => {
//input
    const task = request.query.task;

//dowork
    const result = doWork(task)


//output
//server output
    console.log(result)

//client output
response.json({
    message: result
})
    
})

app.get("/", (request,response) => response.send("this is the default route"))

app.listen(3000, () => console.log(`Server is listening on port ${PORT}`))