import { Router } from 'express'

import { router as postsRouter } from './posts/posts.routes.js'
import { router as usersRouter } from './users/users.routes.js'

export const router = Router()

router.use('/', postsRouter)
router.use('/', usersRouter)
