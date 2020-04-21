const meetingRouter = require('express').Router();

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');
  

// Meetings Routes
meetingRouter.get('/meetings', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

meetingRouter.post('/meetings', (req, res, next) => {

});

meetingRouter.delete('/meetings', (req, res, next) => {

});

module.exports = meetingRouter;
