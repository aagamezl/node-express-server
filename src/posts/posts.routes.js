import express from 'express'

export const router = express.Router()

const validate = (req, res, next) => {
  if (!req.body.first_name) {
    res.status(400).end()

  }
  if (!req.body.last_name) {
    res.status(400).end()
  }

  if (!req.body.gender) {
    res.status(400).end()
  }

  next()
}

router.post('/posts', validate, (req, res) => {
  console.log(req.body)

  res.send('/posts')
})