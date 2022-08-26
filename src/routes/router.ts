import { verifyLocalAdmin } from '../middleware/verify-local-admin'
import { Application } from 'express'
import { createIssue } from './controllers/issue/issue-create'
import { createUser } from './controllers/user/user-create'
import { issueCreateValidator } from './validators/issue/issue-create-validator'
import { userCreateValidator } from './validators/user/user-create-validator'

export const router = (app: Application): void => {
  // User routes
  app.post('/api/user/create', userCreateValidator, verifyLocalAdmin, createUser)

  // Issue routes
  app.post('/api/issue/create', issueCreateValidator, verifyLocalAdmin, createIssue)
}