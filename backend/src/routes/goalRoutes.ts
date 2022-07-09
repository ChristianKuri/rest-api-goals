import express from 'express'

const router = express.Router()

import {
  getGoals,
  createGoal,
  readGoal,
  updateGoal,
  deleteGoal,
} from '../controller/goalController'

router.get('/', getGoals)
router.post('/', createGoal)
router.get('/:id', readGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

export default router
