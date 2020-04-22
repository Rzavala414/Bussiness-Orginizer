 const ideaRouter = require('express').Router();

 const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');
  
  ideaRouter.param('ideaId', (req, res, next, id) => {
        let idea = getFromDatabaseById('ideas', id);

        if(!idea){
            res.status(404).send('Idea Not Found');
        }else{
            req.idea = idea;
            next();
        }
  });

 // Ideas Routes
ideaRouter.get('/ideas', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'))
});

ideaRouter.post('/ideas', (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
});

ideaRouter.get('/ideas/:ideaId', (req, res, next) => {
        res.send(req.idea)
});

ideaRouter.put('/ideas/:ideaId', (req, res, next) => {
    const updateIdea = updateInstanceInDatabase('ideas', req.body)
    res.send(updateIdea);
});

ideaRouter.delete('/ideas/:ideaId', (req, res, next) => {
   const deleted = res.send(deleteFromDatabasebyId('ideas', req.params.id));

   if(deleted){
       res.status(204).send();
   }else{
       res.status(500).send();
   }
});

module.exports = ideaRouter;