const MainDashboardRouter = require('express').Router()

MainDashboardRouter.route('/') // remove current '/' route from server.js
    .get(require('./dashboard.view.js'))

MainDashboardRouter.route('/submissions')
    .get(require('./submissions.view.js'))

module.exports = MainDashboardRouter