const minionsRouter = require('express').Router();

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');
  
minionsRouter.param('minionsId', (req, res, next, id) =>{
    const minion = getFromDatabaseById('minions', id);
    if(minion){
        req.minion = minion;
        next();
    }else{
        res.status(404).send();
    }

});

// Minions Routes
minionsRouter.get('/minions', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
  });
  
  minionsRouter.post('/minions', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
  });
  
  minionsRouter.get('/minions/:minionId', (req, res, next) => {
    res.send(req.minion);
  });
  
  minionsRouter.put('/minions/:minionId', (req, res, next) => {
    let updatedMinionInstance = updateInstanceInDatabase('minions', req.body);
    res.send(updatedMinionInstance);
  });
  
  minionsRouter.delete('/minions/:minionId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
    if (deleted) {
      res.status(204);
    } else {
      res.status(500);
    }
    res.send();
  });

  minionsRouter.get('/minions/work', function(request, response, next){
    
  });

module.exports = minionsRouter;