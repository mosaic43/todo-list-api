var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    },
    {
        id: 2,
        todo: "Seychelles"
    },
    {
        id: 3,
        todo: "Madagascar"
    }
];

// GET /api/todos
app.get('/api/todos', function(request, response, next){
   
   
    response.send(todoList)
})

// GET /api/todos/:id
app.get('/api/todos/:id', function(request, response, next){
    let arrayRequested = todoList.find(listID => listID.id == request.params.id);
    response.send(arrayRequested)
})

// POST /api/todos
app.post('/api/todos', function(request, response, next){
    
    var lastidnumber = todoList[todoList.length-1].id
    var addNewTodoID = lastidnumber + 1

request.body.id = addNewTodoID

todoList.push(request.body)

    response.send("todo " + request.body.todo + " added")
})

// PUT /api/todos/:id
app.put('/api/todos/:id', function(request, response, next){
    var requestedId = request.params.id
    var thisIndex = requestedId - 1

    todoList[thisIndex].todo = request.body.todo

    response.send("Successful")
})

// DELETE /api/todos/:id
app.delete('/api/todos/:id', function(request, response, next){
    response.send(request.body)
})

app.listen(3032, function(){
    console.log('Todo List API is now listening on port 3027...');
})