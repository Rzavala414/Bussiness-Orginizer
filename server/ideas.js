 const ideaRouter = require('express').Router();
 
 const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');
  
 // Ideas Routes
ideaRouter.get('/ideas', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'))
});

ideaRouter.post('/ideas', (req, res, next) => {

});

ideaRouter.get('/ideas/:ideaId', (req, res, next) => {

});

ideaRouter.put('/ideas/ideaId', (req, res, next) => {

});

ideaRouter.delete('/ideas/:ideaId', (req, res, next) => {

});

module.exports = ideaRouter;