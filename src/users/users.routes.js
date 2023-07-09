import express, { Router } from 'express'

import { schema } from './users.schema.js'
import { validate } from '../utils/validate.js'
import * as controller from './users.controller.js'

export const router = Router()

router.get('/users', controller.getAll)

router.get('/users/:id', controller.getById)

router.delete('/users/:id', validate(schema), controller.deleteById)

router.patch('/users/:id', validate(schema), controller.update)

router.post('/users', validate(schema), controller.create)
