const meetingRouter = require('express').Router();

const { 
    addToDatabase,
    getAllFromDatabase,
    deleteAllFromDatabase,
    createMeeting
  } = require('./db');
  

// Meetings Routes
meetingRouter.get('/meetings', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

meetingRouter.post('/meetings', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
});

meetingRouter.delete('/meetings', (req, res, next) => {
    const deleted = deleteAllFromDatabase('meetings');
    res.status(401).send(deleted)

});

module.exports = meetingRouter;
