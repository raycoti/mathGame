'use strict'
const api = require('express').Router()
const db = require('../db');
const router = require('./routes');
api.get('/hello', (req, res) => res.send({hello: 'world'}))
.use(router)
module.exports = api