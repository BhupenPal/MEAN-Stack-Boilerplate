const express = require('express');
const Router = express.Router();

const API = require('../controllers/API.controller');

Router.get('/', API.GetHome)

module.exports = Router;