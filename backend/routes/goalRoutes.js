const express = require('express')
const router = express.Router()
const {
  getGoals,
  readGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} = require('../controller/goalController')

router.get('/', getGoals)
router.post('/', createGoal)
router.get('/:id', readGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

module.exports = router
