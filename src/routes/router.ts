import { verifyLocalAdmin } from '../middleware/verify-local-admin'
import { Application } from 'express'
import { createIssue } from './controllers/issue/issue-create'
import { createUser } from './controllers/user/user-create'
import { issueCreateValidator } from './validators/issue/issue-create-validator'
import { userCreateValidator } from './validators/user/user-create-validator'
import { getIssue } from './controllers/issue/issue-get'
import { getIssues } from './controllers/issue/issue-feed'
import { issueGetValidator } from './validators/issue/issue-get-validator'

export const router = (app: Application): void => {
  // User routes
  app.post('/api/user/create', userCreateValidator, verifyLocalAdmin, createUser)

  // Issue routes
  app.post('/api/issue/create', issueCreateValidator, verifyLocalAdmin, createIssue)
  app.get('/api/issue/get/:id', issueGetValidator, getIssue)
  app.get('/api/issue/get-all', getIssues)
}
