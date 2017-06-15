const router = require('express').Router();
const exampleRouter = require('./example');


module.exports = router;

router.use(exampleRouter);

