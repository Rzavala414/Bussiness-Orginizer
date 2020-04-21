const express = require('express');
const apiRouter = express.Router();
const ideasRouter = require('./ideas.js');
const minionsRouter = require('./minions.js');
const meetingRouter = require('./meetings.js');

apiRouter.use(ideasRouter);
apiRouter.use(minionsRouter);
apiRouter.use(meetingRouter);




module.exports = apiRouter;
