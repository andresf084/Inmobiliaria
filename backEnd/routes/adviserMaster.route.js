const express = require('express'),
router =  express.Router(),
adviserMaster = require('../controllers/adviserMaster.controller')

router.post('/login', adviserMaster.login)
router.post('/', adviserMaster.create)
router.get('/', adviserMaster.list)
router.delete('/:_id', adviserMaster.delete)
router.put('/', adviserMaster.update)
router.post('/search', adviserMaster.search)

module.exports = router