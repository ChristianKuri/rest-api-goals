const asyncHandler = require('express-async-handler')

/**
 * @desc Get all goals
 * @route GET /api/goals
 * @access Public
 * @returns {object} Goals
 */
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Goals' })
})

/**
 * @desc Get a goal by id
 * @route GET /api/goals/:id
 * @access Public
 * @returns {object} Goal
 */
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Goal ${req.params.id}` })
})

/**
 * @desc Create a goal
 * @route POST /api/goals
 * @access Public
 * @returns {object} Goal
 */
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.goal) {
    res.status(400)
    throw new Error('Goal is required')
  }

  res.status(200).json({ message: 'Create Goal' })
})

/**
 * @desc Update a goal
 * @route PUT /api/goals/:id
 * @access Public
 * @returns {object} Goal
 */
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` })
})

/**
 * @desc Delete a goal
 * @route DELETE /api/goals/:id
 * @access Public
 * @returns {object} Goal
 */
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` })
})

module.exports = {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
}
