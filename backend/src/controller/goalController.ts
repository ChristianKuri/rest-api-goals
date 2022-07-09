import asyncHandler from 'express-async-handler'

import Goal from '../models/goalModel'

/**
 * @desc Get all goals
 * @route GET /api/goals
 * @access Public
 * @returns {object} Goals
 */
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()

  res.status(200).json(goals)
})

/**
 * @desc Create a goal
 * @route POST /api/goals
 * @access Public
 * @returns {object} Goal
 */
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400)
    throw new Error('Goal Name is required')
  }

  const goal = await Goal.create({
    name: req.body.name,
  })

  res.status(201).json(goal)
})

/**
 * @desc Get a goal by id
 * @route GET /api/goals/:id
 * @access Public
 * @returns {object} Goal
 */
const readGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  res.status(200).json(goal)
})

/**
 * @desc Update a goal
 * @route PUT /api/goals/:id
 * @access Public
 * @returns {object} Goal
 */
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  if (!req.body.name) {
    res.status(400)
    throw new Error('Goal Name is required')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  )

  res.status(200).json(updatedGoal)
})

/**
 * @desc Delete a goal
 * @route DELETE /api/goals/:id
 * @access Public
 * @returns {object} Goal
 */
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  await goal.delete()

  res.status(200).json({ id: req.params.id })
})

export { getGoals, createGoal, readGoal, updateGoal, deleteGoal }
