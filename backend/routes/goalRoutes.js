const express = require('express')
const router = express.Router()
const {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} = require('../controller/goalController')

router.get('/', getGoals)
router.get('/:id', getGoal)
router.post('/', createGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

module.exports = router
