/**
 * @desc Get all goals
 * @route GET /api/goals
 * @access Public
 * @returns {object} Goals
 */
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get Goals' })
}

/**
 * @desc Get a goal by id
 * @route GET /api/goals/:id
 * @access Public
 * @returns {object} Goal
 */
const getGoal = (req, res) => {
  res.status(200).json({ message: `Get Goal ${req.params.id}` })
}

/**
 * @desc Add a goal
 * @route POST /api/goals
 * @access Public
 * @returns {object} Goal
 */
const addGoal = (req, res) => {
  res.status(200).json({ message: 'Add Goal' })
}

/**
 * @desc Update a goal
 * @route PUT /api/goals/:id
 * @access Public
 * @returns {object} Goal
 */
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` })
}

/**
 * @desc Delete a goal
 * @route DELETE /api/goals/:id
 * @access Public
 * @returns {object} Goal
 */
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` })
}

module.exports = {
  getGoals,
  getGoal,
  addGoal,
  updateGoal,
  deleteGoal,
}
